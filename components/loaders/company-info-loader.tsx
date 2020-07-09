import React from "react";
import { Container, Row, Col } from "reactstrap";

export const CompanyInfoLoader: React.FC<any> = () => (
  <Container className="mt-5">
    <Row className="justify-content-center">
      <Col sm="12" lg="10">
        <div className="box rounded p-3 text-muted text-center py-7">
          <i className="fas fa-circle-notch fa-spin fa-2x" />
        </div>
      </Col>
    </Row>
  </Container>
);
