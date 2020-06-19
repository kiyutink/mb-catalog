import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import DefaultCompanyCard from "./default-company-card";
import { Company } from "../../../lib/types";

interface DefaultPartnersWithMostJobsProps {
  companies: Company[];
}

const DefaultPartnersWithMostJobs: React.FC<DefaultPartnersWithMostJobsProps> = ({
  companies,
}) => (
  <section>
    <Container>
      <Row>
        <Col>
          <h1 className="mb-5 mt-5">Partners with most jobs</h1>
        </Col>
      </Row>
      <Row className="mb-3">
        {companies.map((c) => (
          <Col key={c.id} md={6} lg={4} className="mb-3">
            <DefaultCompanyCard company={c} />
          </Col>
        ))}
      </Row>
      <div className="text-center">
        <Link href="#">
          <a className="btn btn-primary text-uppercase">More Partners</a>
        </Link>
      </div>
    </Container>
  </section>
);

export default DefaultPartnersWithMostJobs;