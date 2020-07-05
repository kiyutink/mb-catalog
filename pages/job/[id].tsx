import React, { Fragment } from "react";
import { Job, Page } from "../../lib/types";
import { GetServerSideProps } from "next";
import { getBoard } from "../../lib/helpers";
import { getComponentCollection } from "../../boards/components/components";
import { moberriesApi } from "../../lib/moberries-api";
import { DoubleColumnLayout } from "../../boards/components/shared/double-column-layout";

interface JobPageProps extends Page {
  job: Job;
}

const JobPage: React.FC<JobPageProps> = ({ job, board }) => {
  const {
    Header,
    Footer,
    JobInfo,
    JobDetails,
    JobDescription,
    JobSidebar,
  } = getComponentCollection(board.slug);
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
          <JobSidebar job={job} />
        </DoubleColumnLayout.Sidebar>
      </DoubleColumnLayout>
      <Footer />
    </Fragment>
  );
};

export default JobPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const jobId = Number(context.query.id);

  const board = getBoard(context);
  const { data: job } = await moberriesApi.getJob({ id: jobId });

  return {
    props: {
      board,
      job,
    },
  };
};