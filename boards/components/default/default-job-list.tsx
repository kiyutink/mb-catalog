import React from "react";
import { Job } from "../../../lib/types";
import DefaultJobCard from "./default-job-card";
import { Row, Col, Container } from "reactstrap";

interface JobListProps {
  jobs: Job[];
}

const DefaultJobList: React.FC<JobListProps> = ({ jobs }) => {
  return (
    <Container>
      <Row>
        <Col lg={{ size: 10, offset: 1 }} md={12}>
          {jobs.map((j) => (
            <DefaultJobCard job={j} key={j.id} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default DefaultJobList;
