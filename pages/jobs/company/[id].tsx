import React, { Fragment } from "react";
import { GetServerSideProps } from "next";
import { Company, Job } from "../../../lib/types/moberries-entities";
import { useComponents } from "../../../hooks/use-components";
import { getBoard } from "../../../lib/helpers";
import { getDataAdapter } from "../../../data-adapters/data-adapters";

interface CompanyPageProps {
  company: Company;
  jobs: Job[];
  jobsCount: number;
}

const CompanyPage: React.FC<CompanyPageProps> = ({
  company,
  jobs,
  jobsCount,
}) => {
  const { Header, Footer, JobList, CompanyInfo } = useComponents();
  return (
    <Fragment>
      <Header />
      <CompanyInfo company={company} />
      <JobList jobs={jobs} jobsCount={jobsCount} />
      <Footer />
    </Fragment>
  );
};

export default CompanyPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const board = getBoard(context.req);
  const adapter = await getDataAdapter(board);

  return adapter.getCompanyPageProps(context);
};
