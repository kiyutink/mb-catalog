import { Company, Job, JobStatuses } from "../lib/types/moberries-entities";
import { moberriesApi } from "../lib/moberries-api";
import { AbstractDataAdapter } from "./abstract-data-adapter";
import { GetServerSideProps } from "next";
import { Board } from "../lib/types/boards";
import { Page } from "../lib/types/page";

export interface CommonIndexPageProps extends Page {
  companies: Company[];
  jobs: Job[];
  jobsCount: number;
}

export class CommonDataAdapter extends AbstractDataAdapter<
  CommonIndexPageProps
> {
  constructor(board: Board) {
    super();
    this.board = board;
  }
  private board: Board;
  init = async () => {};
  getIndexPageProps: GetServerSideProps<CommonIndexPageProps> = async (
    context
  ) => {
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
        activeJobs: true,
      }),
      moberriesApi.getJobList({
        page: context.query.page,
        status: JobStatuses.ACT,
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

