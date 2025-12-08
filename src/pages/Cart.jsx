import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Image,
  ListGroup,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { clearCart, removeFromCart } from "../store/slices/cartSlice";
import { updateQuantity } from "../store/slices/cartSlice";

const Cart = () => {
  const { cartItems, totalPrice } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = React.useState("credit_card");

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4 fw-bold">Shopping Cart</h2>
      <Row>
        <Col lg={8}>
          {cartItems.length === 0 ? (
            <p className="text-center text-muted">
              The Cart is currently empty.
            </p>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.id} className="mb-3 border rounded">
                  <Row className="align-items-center">
                    <Col md={3} className="text-center">
                      <Image
                        src={item.image}
                        alt={item.title}
                        rounded
                        fluid
                        style={{ height: "120px", objectFit: "cover" }}
                      />
                    </Col>
                    <Col md={5}>
                      <h5 className="mb-1">{item.title}</h5>
                      <p className="text-muted mb-2">${item.price}</p>
                      <div className="d-flex align-items-center gap-2">
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          onClick={() =>
                            dispatch(
                              updateQuantity({
                                id: item.id,
                                newQty: Math.max(item.quantity - 1, 1),
                              })
                            )
                          }
                        >
                          -
                        </Button>

                        <span className="fw-bold">{item.quantity}</span>

                        <Button
                          variant="outline-secondary"
                          size="sm"
                          onClick={() =>
                            dispatch(
                              updateQuantity({
                                id: item.id,
                                newQty: item.quantity + 1,
                              })
                            )
                          }
                        >
                          +
                        </Button>
                      </div>
                    </Col>
                    <Col md={4} className="text-center">
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        Delete
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
              <button
                className="btn btn-outline-success"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
            </ListGroup>
          )}
        </Col>

        <Col lg={4}>
          <Card className="p-3 mt-3 mt-lg-0 mb-3">
            <Card.Body>
              <Card.Title className="fw-bold mb-3">Payment Method</Card.Title>
              <Form>
                <Form.Check
                  type="radio"
                  id="credit_card"
                  label="Credit Card"
                  name="paymentMethod"
                  value="credit_card"
                  checked={paymentMethod === "credit_card"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mb-2"
                />
                <Form.Check
                  type="radio"
                  id="paypal"
                  label="PayPal"
                  name="paymentMethod"
                  value="paypal"
                  checked={paymentMethod === "paypal"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mb-2"
                />
                <Form.Check
                  type="radio"
                  id="cod"
                  label="Cash on Delivery"
                  name="paymentMethod"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
              </Form>
            </Card.Body>
          </Card>

          <Card className="p-3 mt-3 mt-lg-0">
            <Card.Body>
              <Card.Title className="fw-bold mb-3">
                Application Summary
              </Card.Title>
              <Card.Text className="d-flex justify-content-between">
                <span>Number of products:</span>
                <span>{cartItems.length}</span>
              </Card.Text>
              <Card.Text className="d-flex justify-content-between fw-semibold">
                <span>Total Amount:</span>
                <span>{totalPrice.toFixed(2)}$</span>
              </Card.Text>
              <Button
                className="w-100 mt-3 btn btn-success"
                onClick={() => {
                  cartItems.length !== 0 ? navigate("/orderShipped", { state: { paymentMethod } }) : "";
                  dispatch(clearCart());
                }}
                disabled={cartItems.length === 0}
              >
                Buy Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
