import React from "react";
import { Job, JobStatuses } from "../../lib/types/moberries-entities";
import { Button } from "reactstrap";
import { useComponents } from "../../hooks/use-components";

interface DefaultJobSidebar {
  job: Job;
  similarJobs: Job[];
}

const DefaultJobSidebar: React.FC<DefaultJobSidebar> = ({
  job,
  similarJobs,
}) => {
  const { SimilarJobs, JobShare } = useComponents();
  return (
    <div className="mt-5">
      {job.status === JobStatuses.ACT && (
        <Button
          className="mb-3 d-none d-lg-block"
          block
          color="primary"
          href="#"
          tag="a"
          target="_blank"
        >
          Apply now
        </Button>
      )}
      <JobShare job={job} />
      {similarJobs.length > 0 && <SimilarJobs jobs={similarJobs} />}
    </div>
  );
};

export default DefaultJobSidebar;
