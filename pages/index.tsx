import React, { Fragment } from "react";
import { GetServerSideProps } from "next";
import { getComponentCollection } from "../boards/components/components";
import {
  DefaultIndexPageProps,
  getIndexPageProps,
} from "../boards/page-data-adapters/default";

type IndexPageProps = DefaultIndexPageProps;

const IndexPage: React.FC<IndexPageProps> = ({
  board,
  companies,
  jobs,
  jobsCount,
}) => {
  const {
    Header,
    Footer,
    PartnersWithMostJobs,
    JobList,
  } = getComponentCollection(board.slug);

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
