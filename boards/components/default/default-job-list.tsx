import React from "react";
import { Job } from "../../../lib/types";
import DefaultJobCard from "./default-job-card";
import { Row, Col, Container } from "reactstrap";
import { Pagination } from "../shared/pagination";

interface JobListProps {
  jobs: Job[];
  jobsCount: number;
}

const DefaultJobList: React.FC<JobListProps> = ({ jobs, jobsCount }) => {
  return (
    <Container tag="section" className="my-5">
      <Row>
        <Col lg={{ size: 10, offset: 1 }} md={12}>
          {jobs.map((j) => (
            <DefaultJobCard job={j} key={j.id} />
          ))}
        </Col>
      </Row>
      <Row>
        <Col>
          <Pagination itemsPerPage={10} totalCount={jobsCount} />
        </Col>
      </Row>
    </Container>
  );
};

export default DefaultJobList;
