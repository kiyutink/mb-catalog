import React from "react";
import { Container, Row, Col } from "reactstrap";

const DefaultFooter = () => {
  return (
    <footer className="bg-white text-center text-md-left">
      <Container>
        <Row className="py-3 py-md-5">
          <Col xs="12" md="3">
            <ul className="list-unstyled m-0">
              <li className="py-1">
                <a
                  className="text-muted"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Homepage
                </a>
              </li>
              <li className="py-1">
                <a
                  className="text-muted"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  How it works
                </a>
              </li>
              <li className="py-1">
                <a
                  className="text-muted"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Support
                </a>
              </li>
            </ul>
          </Col>
          <Col xs="12" md="3">
            <ul className="list-unstyled m-0">
              <li className="py-1">
                <a
                  className="text-muted"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat bot
                </a>
              </li>
              <li className="py-1">
                <a
                  className="text-muted"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About
                </a>
              </li>
              <li className="py-1">
                <a
                  className="text-muted"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </Col>
          <Col xs="12" md="3">
            <ul className="list-unstyled m-0">
              <li className="py-1">
                <a
                  className="text-muted"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms
                </a>
              </li>
              <li className="py-1">
                <a
                  className="text-muted"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy
                </a>
              </li>
              <li className="py-1">
                <a
                  className="text-muted"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </li>
            </ul>
          </Col>
          <Col xs="12" md="3" className="text-md-right">
            <img
              width="100"
              src="/assets/mb-logo-footer.svg"
              alt="Moberries Logo"
            />
          </Col>
        </Row>
        <hr className="m-0 border-top" />
        <Row className="py-3 py-md-4">
          <Col xs="12" md="4">
            <span className="font-weight-light">© MoBerries 2020 </span>
          </Col>
          <Col xs="12" md="8" className="text-md-right">
            <ul className="list-inline m-0">
              <li className="list-inline-item mr-3">
                <a
                  className="text-muted"
                  href="https://www.facebook.com/moberries/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li className="list-inline-item mr-3">
                <a
                  className="text-muted"
                  href="https://twitter.com/MoBerries"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li className="list-inline-item mr-3">
                <a
                  className="text-muted"
                  href="https://www.linkedin.com/company/10009040"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin" />
                </a>
              </li>
              <li className="list-inline-item mr-3">
                <a
                  className="text-muted"
                  href="https://www.youtube.com/channel/UC22gC5eRgLqqnVg9zjSI53w"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube" />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="text-muted"
                  href="https://www.instagram.com/teammoberries/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default DefaultFooter;
