import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  ProgressBar,
} from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

function OrderShipped() {
  const navigate = useNavigate();
  const location = useLocation();
  const paymentMethod = location.state?.paymentMethod || "Not specified";

  const getMethodLabel = (method) => {
    switch (method) {
      case "credit_card":
        return "Credit Card";
      case "paypal":
        return "PayPal";
      case "cod":
        return "Cash on Delivery";
      default:
        return method;
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="text-center shadow-lg border-0 rounded-4 p-4">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/2920/2920266.png"
              alt="Order Shipped"
              width="150"
              className="mx-auto mb-4"
            />
            <h2 className="fw-bold text-success mb-3">
              Your Order Has Been Shipped!
            </h2>
            <p className="text-muted mb-2">
              Thank you for shopping with us. Your order is on its way and will
              arrive soon.
            </p>
            <p className="fw-semibold text-dark mb-4">
              Payment Method: <span className="text-success">{getMethodLabel(paymentMethod)}</span>
            </p>

            <div className="d-flex justify-content-center gap-3">
              <Button variant="outline-success">Track Order</Button>
              <Button variant="success" onClick={() => navigate("/")}>
                Back to Home
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default OrderShipped;
