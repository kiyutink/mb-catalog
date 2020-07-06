import React, { Fragment } from "react";
import { Job, Page } from "../../lib/types";
import { GetServerSideProps } from "next";
import { moberriesApi } from "../../lib/moberries-api";
import { DoubleColumnLayout } from "../../boards/components/shared/double-column-layout";
import { useComponents } from "../../hooks/use-components";

interface JobPageProps {
  job: Job;
}

const JobPage: React.FC<JobPageProps> = ({ job }) => {
  const {
    Header,
    Footer,
    JobInfo,
    JobDetails,
    JobDescription,
    JobSidebar,
  } = useComponents()
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

  const { data: job } = await moberriesApi.getJob({ id: jobId });

  return {
    props: {
      job,
    },
  };
};
