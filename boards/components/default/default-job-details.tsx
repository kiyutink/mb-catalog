import React from "react";
import { Job } from "../../../lib/types";
import { Badge } from "reactstrap";

interface DefaultJobDetailsProps {
  job: Job;
}

const DefaultJobDetails: React.FC<DefaultJobDetailsProps> = ({ job }) => {
  const {
    salaryMax,
    salaryMin,
    careerLevel,
    jobTypes,
    relocate,
    remote,
    skills,
    languages,
  } = job;
  return (
    <div className="p-3 border-left border-right">
      <div className="d-md-flex mb-2">
        <div className="text-muted">
          <span>General</span>
        </div>
        <div>
          {salaryMin > 0 && salaryMax > 0 && (
            <Badge color="light">
              {salaryMin} {salaryMax}
            </Badge>
          )}
          <Badge color="light">career level: {careerLevel}</Badge>
          {jobTypes.length > 0 &&
            jobTypes.map((i) => (
              <Badge key={i} color="light">
                {i}
                {/* <JobType jobType={i} /> */}
              </Badge>
            ))}
          {relocate && "relocation"}
          {/* <Badge color="light">{t("relocation")}</Badge>} */}
          {remote && "remote"}
          {/* <Badge color="light">{t("remote")}</Badge>} */}
        </div>
      </div>
      {languages.length > 0 && (
        <div className="d-md-flex mb-2">
          <div className="text-muted">
            languages
            {/* <span>{t("languages")}</span> */}
          </div>
          <div>
            {languages.map((l) => (
              <Badge key={l.id} color="light">
                <span>{l.name}</span> -{l.level}
                {/* <LanguageLevel level={l.level} /> */}
              </Badge>
            ))}
          </div>
        </div>
      )}
      {skills.length > 0 && (
        <div className="d-md-flex">
          <div className="text-muted">
            skills
            {/* <span>{t("skills")}</span> */}
          </div>
          <div>
            {skills.map((s) => (
              <Badge key={s.id} color="light">
                {s.name}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DefaultJobDetails;
