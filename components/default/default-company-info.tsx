import React from "react";
import { Container, Row, Col, Media } from "reactstrap";
import { Company } from "../../lib/types";

interface DefaultCompanyInfoProps {
  company: Company;
}

const DefaultCompanyInfo: React.FC<DefaultCompanyInfoProps> = ({ company }) => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col sm="12" lg="10">
          <Media className="p-3 border border-bottom-0 box rounded">
            <Media left>
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                width="80"
                height="80"
                className="mr-3 d-none d-md-inline clickable"
              />
            </Media>
            <Media className="justify-content-between" body>
              <h4 className="d-flex justify-content-between align-items-center mb-0">
                {company.name}
              </h4>
              <div>
                <i className="fas fa-link fa-fw mr-1 my-2" />
                <a href={company.website}>{company.website}</a>
              </div>
              <div>
                <i className="fas fa-map-marker-alt fa-fw mr-1" />
                <span>{company.city.name}</span>
              </div>
            </Media>
          </Media>
          <div className="p-3 border box mt-2 rounded">{company.about}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default DefaultCompanyInfo;
