import React from "react";
import { Job } from "../../lib/types/moberries-entities";
import { Row, Col, Container } from "reactstrap";
import { Pagination } from "../shared/pagination";
import { useComponents } from "../../hooks/use-components";

interface JobListProps {
  jobs: Job[];
  jobsCount: number;
}

const DefaultJobList: React.FC<JobListProps> = ({ jobs, jobsCount }) => {
  const { JobCard } = useComponents();
  return (
    <Container tag="section" className="my-5">
      <Row>
        <Col lg={{ size: 10, offset: 1 }} md={12}>
          {jobs.map((j) => (
            <JobCard job={j} key={j.id} className="mb-1" />
          ))}
          <Pagination
            className="mt-3"
            itemsPerPage={10}
            totalCount={jobsCount}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default DefaultJobList;
