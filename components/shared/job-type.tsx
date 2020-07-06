import React, { Fragment } from "react";
import { JobTypes } from "../../lib/types";

export const JobType: React.FC<{ jobType: JobTypes }> = ({ jobType }) => (
  <Fragment>
    {
      {
        1: "Full time",
        2: "Part time",
        3: "Contract",
        4: "Internship",
        5: "Temporary",
      }[jobType]
    }
  </Fragment>
);
