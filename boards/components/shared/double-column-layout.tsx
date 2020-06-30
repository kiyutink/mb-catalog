import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";

const Content: React.FC = ({ children }) => <Fragment>{children}</Fragment>;
const Sidebar: React.FC = ({ children }) => <Fragment>{children}</Fragment>;

interface DoubleColumnLayoutProps {
  children: React.ReactElement[];
}

export const DoubleColumnLayout: React.FC<DoubleColumnLayoutProps> & {
  Content: React.FC;
  Sidebar: React.FC;
} = ({ children }) => {
  return (
    <Container>
      <Row>
        <Col sm="12" lg="8">
          {children.find((c) => c.type === Content)}
        </Col>
        <Col sm="12" lg="4" className="pt-4 pt-lg-0">
          {children.find((c) => c.type === Sidebar)}
        </Col>
      </Row>
    </Container>
  );
};
DoubleColumnLayout.Content = Content;
DoubleColumnLayout.Sidebar = Sidebar;
