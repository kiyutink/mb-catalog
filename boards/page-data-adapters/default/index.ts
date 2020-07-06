import { GetServerSideProps } from "next";
import { Company, Job, Page } from "../../../lib/types";
import { moberriesApi } from "../../../lib/moberries-api";

export interface DefaultIndexPageProps {
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
      status: "ACT"
    }),
  ]);

  return {
    props: {
      companies,
      jobs,
      jobsCount,
    },
  };
};
