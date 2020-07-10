import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import { Company } from "../../lib/types/moberries-entities";
import { useComponents } from "../../hooks/use-components";

interface DefaultPartnersWithMostJobsProps {
  companies: Company[];
}

const DefaultPartnersWithMostJobs: React.FC<DefaultPartnersWithMostJobsProps> = ({
  companies,
}) => {
  const { CompanyCard } = useComponents();

  return (
    <Container tag="section" className="my-5">
      <Row>
        <Col>
          <h1 className="mb-5">Partners with most jobs</h1>
        </Col>
      </Row>
      <Row className="mb-4">
        {companies.map((c) => (
          <Col key={c.id} md={6} lg={4} className="py-1">
            <CompanyCard company={c} />
          </Col>
        ))}
      </Row>
      <div className="text-center">
        <Link href="/jobs/companies">
          <a className="btn btn-primary text-uppercase rounded">
            More partners
          </a>
        </Link>
      </div>
    </Container>
  );
};

export default DefaultPartnersWithMostJobs;
