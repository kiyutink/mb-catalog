import React, { Fragment } from "react";
import { GetServerSideProps } from "next";
import { moberriesApi } from "../../../lib/moberries-api";
import { getBoard } from "../../../lib/helpers";
import { Company, Page, Job } from "../../../lib/types";
import { getComponentCollection } from "../../../boards/components/components";

interface CompanyPageProps extends Page {
  company: Company;
  jobs: Job[];
}

const CompanyPage: React.FC<CompanyPageProps> = ({ company, slug, jobs }) => {
  const { Header, Footer, JobList, CompanyInfo } = getComponentCollection(slug);
  return (
    <Fragment>
      <Header />
      <CompanyInfo company={company} />
      <JobList jobs={jobs} />
      <Footer />
    </Fragment>
  );
};

export default CompanyPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = getBoard(context);
  const companyId = Number(context.query.id);
  const { data: company } = await moberriesApi.getCompany({
    id: companyId,
  });
  const {
    data: { results: jobs },
  } = await moberriesApi.getCompanyJobList({
    id: companyId,
  });
  return {
    props: {
      company,
      slug,
      jobs,
    },
  };
};
