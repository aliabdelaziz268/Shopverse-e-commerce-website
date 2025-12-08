import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCcVisa, FaCcMastercard, FaPaypal, FaApplePay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <Container>
        <Row className="gy-4">
          <Col md={4}>
            <h5 className="text-uppercase fw-bold mb-3">Shopverse</h5>
            <p style={{ lineHeight: "1.7" }}>
              Shopverse is your one-stop online store-providing you with the
              latest exciting products and a fun and secure customer experience.
            </p>
          </Col>

          <Col md={4}>
            <h5 className="text-uppercase fw-bold mb-3">Quick links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="text-light text-decoration-none">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="text-light text-decoration-none">
                  About us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-light text-decoration-none">
                  Contact us
                </a>
              </li>
            </ul>
          </Col>

          <Col md={4}>
            <h5 className="text-uppercase fw-bold mb-3">Contact us</h5>
            <p>Cairo, Egypt</p>
            <p>+201151545947</p>
            <p>support@shopverse.com</p>
          </Col>
        </Row>

        <hr className="border-secondary my-4" />

        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <small>
              © {new Date().getFullYear()} <strong>Shopverse</strong> — All
              rights reserved.
            </small>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <FaCcVisa className="fs-3 mx-2" />
            <FaCcMastercard className="fs-3 mx-2" />
            <FaPaypal className="fs-3 mx-2" />
            <FaApplePay className="fs-3 mx-2" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
