import React from "react";
import { Job } from "../../lib/types";

interface DefaultJobDescriptionProps {
  job: Job;
}

const DefaultJobDescription: React.FC<DefaultJobDescriptionProps> = ({
  job,
}) => {
  return (
    <div className="box p-3 mb-3 border rounded">
      <h4>Description</h4>
      <div
        className="text-break pr-md-5 pr-lg-7"
        dangerouslySetInnerHTML={{ __html: job.description }}
      />
    </div>
  );
};

export default DefaultJobDescription;
