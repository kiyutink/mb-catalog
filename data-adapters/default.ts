import { JobStatuses, CompanyGroup } from "../lib/types/moberries-entities";
import { moberriesApi } from "../lib/moberries-api";
import { CommonIndexPageProps, CommonJobPageProps } from "./common";
import { Board } from "../lib/types/boards";
import { AbstractDataAdapter } from "./abstract-data-adapter";
import { GetServerSideProps } from "next";
import { pluck, propOr, pipe } from "ramda";
import { sample } from "../lib/helpers";

export interface DefaultIndexPageProps extends CommonIndexPageProps {}
export interface DefaultJobPageProps extends CommonJobPageProps {}

export class DefaultDataAdapter extends AbstractDataAdapter<
  DefaultIndexPageProps,
  DefaultJobPageProps
> {
  constructor(board: Board) {
    super();
    this.board = board;
  }
  private companyGroup: CompanyGroup | null = null;
  board: Board;
  init = async () => {
    const { data: companyGroup } = await moberriesApi.getCompanyGroup({
      slug: this.board.subdomain!,
    });
    this.companyGroup = companyGroup;
  };
  getJobPageProps: GetServerSideProps<DefaultJobPageProps> = async (
    context
  ) => {
    const jobId = Number(context.query.id);

    const { data: job } = await moberriesApi.getJob({ id: jobId });
    const {
      data: { results: similarJobs },
    } = await moberriesApi.getJobList({
      limit: 6,
      companyGroup: this.companyGroup!.id,
      job_roles__category: pipe(
        pluck("category"),
        sample,
        propOr("", "id")
      )(job.jobRoles),
    });

    return {
      props: {
        job,
        similarJobs,
        board: this.board,
      },
    };
  };

  getIndexPageProps: GetServerSideProps<DefaultIndexPageProps> = async (
    context
  ) => {
    if (!this.companyGroup) {
      throw new Error(
        "The adapter must be first initialized before calling getIndexPageProps"
      );
    }
    const [
      {
        data: { results: companies },
      },
      {
        data: { results: jobs, count: jobsCount },
      },
    ] = await Promise.all([
      moberriesApi.getCompanyList({
        limit: 6,
        ordering: "used_jobs",
        companyGroup: this.companyGroup.id,
        activeJobs: true,
      }),
      moberriesApi.getJobList({
        page: context.query.page,
        status: JobStatuses.ACT,
        companyGroup: this.companyGroup.id,
        fields: [
          "title",
          "company",
          "locations",
          "salary_min",
          "id",
          "salary_max",
        ],
      }),
    ]);

    return {
      props: {
        companies,
        jobs,
        jobsCount,
        board: this.board,
      },
    };
  };
}
