import React, { Fragment } from "react";
import { GetServerSideProps } from "next";
import { Page, Company, Job } from "../lib/types";
import { getBoard } from "../lib/helpers";
import { getComponentCollection } from "../boards/components/components";
import { moberriesApi } from "../lib/moberries-api";

interface IndexPage extends Page {
  companies: Company[];
  jobs: Job[];
}

export default ({ slug, companies, jobs }: IndexPage) => {
  const {
    Header,
    Footer,
    PartnersWithMostJobs,
    JobList,
  } = getComponentCollection(slug);
  return (
    <Fragment>
      <Header />
      <PartnersWithMostJobs companies={companies} />
      <JobList jobs={jobs} />
      <Footer />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const [
    {
      data: { results: companies },
    },
    {
      data: { results: jobs },
    },
  ] = await Promise.all([
    moberriesApi.getCompanyList(),
    moberriesApi.getJobList(),
  ]);

  return {
    props: {
      slug: getBoard(context),
      companies,
      jobs,
    },
  };
};
