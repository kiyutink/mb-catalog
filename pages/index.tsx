import React, { Fragment } from "react";
import { GetServerSideProps } from "next";
import {
  DefaultIndexPageProps,
  getIndexPageProps,
} from "../page-data-adapters/default";
import { useComponents } from "../hooks/use-components";

type IndexPageProps = DefaultIndexPageProps;

const IndexPage: React.FC<IndexPageProps> = ({
  companies,
  jobs,
  jobsCount,
}) => {
  const { Header, Footer, PartnersWithMostJobs, JobList } = useComponents();
  return (
    <Fragment>
      <Header />
      <PartnersWithMostJobs companies={companies} />
      <JobList jobs={jobs} jobsCount={jobsCount} />
      <Footer />
    </Fragment>
  );
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps<IndexPageProps> = async (
  context
) => {
  return getIndexPageProps(context);
};
