import React, { Fragment } from "react";
import { LanguageLevels } from "../../lib/types";

export const LanguageLevel: React.FC<{ level: LanguageLevels }> = ({
  level,
}) => (
  <Fragment>
    {
      {
        0: "Beginner",
        1: "Elementary",
        2: "Intermediate",
        3: "UpperIntermediate",
        4: "Advanced",
        5: "Mastery",
        6: "Native",
      }[level]
    }
  </Fragment>
);
