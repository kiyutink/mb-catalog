import { JobStatuses, CompanyGroup } from "../lib/types/moberries-entities";
import { moberriesApi } from "../lib/moberries-api";
import { CommonIndexPageProps } from "./common";
import { Board } from "../lib/types/boards";
import { AbstractDataAdapter } from "./abstract-data-adapter";
import { GetServerSideProps } from "next";

export interface DefaultIndexPageProps extends CommonIndexPageProps {}

export class DefaultDataAdapter extends AbstractDataAdapter<
  DefaultIndexPageProps
> {
  constructor(board: Board) {
    super();
    this.board = board;
  }
  private companyGroup: CompanyGroup | null = null;
  private board: Board;
  init = async () => {
    const { data: companyGroup } = await moberriesApi.getCompanyGroup({
      slug: this.board.subdomain!,
    });
    this.companyGroup = companyGroup;
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

