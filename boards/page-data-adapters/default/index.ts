import { GetServerSideProps } from "next";
import { Company, Job, Page } from "../../../lib/types";
import { moberriesApi } from "../../../lib/moberries-api";
import { getBoard } from "../../../lib/helpers";

export interface DefaultIndexPageProps extends Page {
  companies: Company[];
  jobs: Job[];
  jobsCount: number;
}

export const getIndexPageProps: GetServerSideProps<DefaultIndexPageProps> = async (
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
    }),
    moberriesApi.getJobList({
      page: context.query.page,
    }),
  ]);

  return {
    props: {
      board: getBoard(context),
      companies,
      jobs,
      jobsCount,
    },
  };
};
