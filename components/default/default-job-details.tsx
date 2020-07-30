import React from "react";
import { isNil } from "ramda";
import { Job } from "../../lib/types/moberries-entities";
import { Badge, Col, Row } from "reactstrap";
import { JobType } from "../shared/job-type";
import { LanguageLevel } from "../shared/language-level";
import { Salary } from "../shared/salary";
import { CareerLevel } from "../shared/career-level";

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
    <div className="p-3 border box rounded my-2">
      <Row className="mt-1">
        <Col xs={12} md={2}>
          <span className="text-muted">General</span>
        </Col>
        <Col xs={12} md={10}>
          {salaryMin > 0 && salaryMax > 0 && (
            <Badge color="light" className="mr-1 mb-1">
              <Salary salaryMax={salaryMax} salaryMin={salaryMin} />
            </Badge>
          )}
          {!isNil(careerLevel) && (
            <Badge color="light" className="mr-1 mb-1">
              Career level: <CareerLevel level={careerLevel} />
            </Badge>
          )}
          {jobTypes.length > 0 &&
            jobTypes.map((i) => (
              <Badge key={i} color="light" className="mr-1 mb-1">
                <JobType jobType={i} />
              </Badge>
            ))}
          {relocate && (
            <Badge color="light" className="mr-1 mb-1">
              Relocation
            </Badge>
          )}
          {remote && (
            <Badge color="light" className="mr-1 mb-1">
              Remote
            </Badge>
          )}
        </Col>
      </Row>
      {languages.length > 0 && (
        <Row className="mt-1">
          <Col xs={12} md={2}>
            <span className="text-muted">Languages</span>
          </Col>
          <Col xs={12} md={10}>
            {languages.map((l) => (
              <Badge key={l.id} color="light" className="mr-1 mb-1">
                <span>{l.name}</span> - <LanguageLevel level={l.level} />
              </Badge>
            ))}
          </Col>
        </Row>
      )}
      {skills.length > 0 && (
        <Row className="mt-1">
          <Col xs={12} md={2}>
            <span className="text-muted">Skills</span>
          </Col>
          <Col xs={12} md={10}>
            {skills.map((s) => (
              <Badge key={s.id} color="light" className="mr-1 mb-1">
                {s.name}
              </Badge>
            ))}
          </Col>
        </Row>
      )}
    </div>
  );
};

export default DefaultJobDetails;
