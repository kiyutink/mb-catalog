import React, { Fragment } from "react";
import { GetServerSideProps } from "next";
import { useComponents } from "../hooks/use-components";
import { getBoard } from "../lib/helpers";
import { getDataAdapter, IndexPageProps } from "../data-adapters/data-adapters";

const IndexPage: React.FC<IndexPageProps> = ({
  companies,
  jobs,
  jobsCount,
}) => {
  const {
    Header,
    Footer,
    PartnersWithMostJobs,
    JobList,
    JobsFilter,
    Hero,
  } = useComponents();
  return (
    <Fragment>
      <Header />
      <Hero />
      <PartnersWithMostJobs companies={companies} />
      <JobsFilter />
      <JobList jobs={jobs} jobsCount={jobsCount} />
      <Footer />
    </Fragment>
  );
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps<IndexPageProps> = async (
  context
) => {
  const board = getBoard(context.req);
  const adapter = await getDataAdapter(board);
  return adapter.getIndexPageProps(context);
};
