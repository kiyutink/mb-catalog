import React from "react";
import { Company } from "../../lib/types/moberries-entities";
import { Row, Col } from "reactstrap";
import { useComponents } from "../../hooks/use-components";

interface DefaultCompaniesListProps {
  companies: Company[];
}

const DefaultCompaniesList: React.FC<DefaultCompaniesListProps> = ({
  companies,
}) => {
  const { CompanyCard } = useComponents();
  return (
    <Row>
      {companies.map((company) => (
        <Col xs={12} md={6} lg={4} className="py-1" key={company.id}>
          <CompanyCard company={company} />
        </Col>
      ))}
    </Row>
  );
};

export default DefaultCompaniesList;
