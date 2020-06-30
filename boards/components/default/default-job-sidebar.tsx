import React, { Fragment } from "react";
import { Job, JobStatuses } from "../../../lib/types";
import { Button } from "reactstrap";

interface DefaultJobSidebar {
  job: Job;
  similarJobs?: Job[];
}

const DefaultJobSidebar: React.FC<DefaultJobSidebar> = ({
  job,
  similarJobs,
}) => {
  return (
    <div>
      <Fragment>
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
        {/* <JobShare
          jobId={job.id}
          jobTitle={job.title}
          companyName={job.company.name}
        />
        {similarJobs.length > 0 && <SimilarJobList jobs={similarJobs} />} */}
      </Fragment>
    </div>
  );
};

export default DefaultJobSidebar;
