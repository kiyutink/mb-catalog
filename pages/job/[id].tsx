import React, { Fragment } from "react";
import { Job } from "../../lib/types/moberries-entities";
import { GetServerSideProps } from "next";
import { moberriesApi } from "../../lib/moberries-api";
import { DoubleColumnLayout } from "../../components/shared/double-column-layout";
import { useComponents } from "../../hooks/use-components";
import {
  getDataAdapter,
  JobPageProps,
} from "../../data-adapters/data-adapters";
import { getBoard } from "../../lib/helpers";

const JobPage: React.FC<JobPageProps> = ({ job, similarJobs }) => {
  const {
    Header,
    Footer,
    JobInfo,
    JobDetails,
    JobDescription,
    JobSidebar,
  } = useComponents();
  return (
    <Fragment>
      <Header />
      <DoubleColumnLayout>
        <DoubleColumnLayout.Content>
          <JobInfo job={job} />
          <JobDetails job={job} />
          <JobDescription job={job} />
        </DoubleColumnLayout.Content>
        <DoubleColumnLayout.Sidebar>
          <JobSidebar job={job} similarJobs={similarJobs} />
        </DoubleColumnLayout.Sidebar>
      </DoubleColumnLayout>
      <Footer />
    </Fragment>
  );
};

export default JobPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const board = getBoard(context.req);
  const adapter = await getDataAdapter(board);

  return adapter.getJobPageProps(context);
};
