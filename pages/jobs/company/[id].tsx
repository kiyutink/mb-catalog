import React, { Fragment } from "react";
import { GetServerSideProps } from "next";
import { moberriesApi } from "../../../lib/moberries-api";
import { Company, Page, Job } from "../../../lib/types";
import { useComponents } from "../../../hooks/use-components";

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
  const companyId = Number(context.query.id);
  const { data: company } = await moberriesApi.getCompany({
    id: companyId,
  });
  const {
    data: { results: jobs, count: jobsCount },
  } = await moberriesApi.getCompanyJobList({
    id: companyId,
    status: "ACT",
  });
  return {
    props: {
      company,
      jobs,
      jobsCount,
    },
  };
};
