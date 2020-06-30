import React from "react";
import { Container, Row, Col, Media } from "reactstrap";
import { Company } from "../../../lib/types";

interface DefaultCompanyInfoProps {
  company: Company;
}

const DefaultCompanyInfo: React.FC<DefaultCompanyInfoProps> = ({ company }) => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm="12" lg="10">
          <Media className="p-3 border border-bottom-0">
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
              <h4 className="d-flex justify-content-between align-items-center">
                <a className="card-link">{company.name}</a>
              </h4>
              <div>
                <i className="fas fa-link mr-1" />
                <a href={company.website}>{company.website}</a>
              </div>
              <div className="d-flex">
                <div className="mr-3">
                  <i className="fas fa-sm fa-map-marker-alt" />
                  <span className="ml-1">{company.city.name}</span>
                </div>
              </div>
            </Media>
          </Media>
          <div className="p-3 border">{company.about}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default DefaultCompanyInfo;
