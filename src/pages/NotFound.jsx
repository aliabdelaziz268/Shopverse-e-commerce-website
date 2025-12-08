import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center text-center vh-100 bg-light"
    >
      <Row>
        <Col>
          <Image
            src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
            alt="404 Not Found"
            width="180"
            className="mb-4"
          />
          <h1 className="display-4 fw-bold text-danger">404</h1>
          <h2 className="mb-3">Page Not Found</h2>
          <p className="text-muted mb-4">
            The page you’re looking for doesn’t exist or has been moved.
          </p>
          <Button variant="success" size="lg" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;
