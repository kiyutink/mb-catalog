import React, { Fragment } from "react";
import { CareerLevels } from "../../../lib/types";

export const CareerLevel: React.FC<{ level: CareerLevels }> = ({ level }) => (
  <Fragment>
    {
      {
        0: "Student",
        1: "Entry Level",
        2: "Intermediate",
        3: "Senior",
        4: "Expert",
        5: "Executive",
      }[level]
    }
  </Fragment>
);
