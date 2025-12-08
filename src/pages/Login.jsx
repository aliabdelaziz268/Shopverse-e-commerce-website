import React, { useState } from "react";
import { Form, Button, Container, Alert, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/slices/authSlice";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.authSlice);

  const [form, setForm] = useState({ email: "", password: "" });
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validateForm = () => {
    const errors = {};

    if (!form.email.trim()) {
      errors.email = "Email is required.";
    }

    if (!form.password.trim()) {
      errors.password = "Password is required.";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    dispatch(loginUser(form)).then((res) => {
      if (!res.error) navigate("/");
    });
  };

  const getBorderColor = (field) => {
    if (validationErrors[field]) return "red";
    if (form[field]) return "green";
    return "#ccc";
  };

  return (
    <Container className="mt-5">
      <Row className="align-items-center justify-content-around">
        <Col
          md={4}
          className="mt-5 p-4 rounded"
          style={{
            border: "1px solid #ccc",
            boxShadow: "0 2px 6px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 className="text-center mb-3 fw-bold text-success">Login</h3>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your Email"
                value={form.email}
                onChange={handleChange}
                style={{
                  borderColor: getBorderColor("email"),
                  borderWidth: "2px",
                  padding: "10px",
                }}
              />
              {validationErrors.email && (
                <small className="text-danger">{validationErrors.email}</small>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter your Password"
                value={form.password}
                onChange={handleChange}
                style={{
                  borderColor: getBorderColor("password"),
                  borderWidth: "2px",
                  padding: "10px",
                }}
              />
              {validationErrors.password && (
                <small className="text-danger">
                  {validationErrors.password}
                </small>
              )}
            </Form.Group>
            <NavLink className="text-success fw-semibold text-decoration-none">
              Forgot password?
            </NavLink>
            {error && <Alert variant="danger">{error}</Alert>}

            <Button type="submit" className="w-100 btn btn-success mt-2">
              Login
            </Button>
          </Form>

          <p className="mt-3 text-center">
            Don’t have an account?{" "}
            <NavLink
              to="/register"
              className="text-success fw-semibold text-decoration-none"
            >
              Register
            </NavLink>
          </p>
        </Col>
        <Col md={6} className="text-center">
          <img
            src="https://i.pinimg.com/736x/f9/10/23/f91023eb94b6312645c11e8026df341e.jpg"
            alt="Login"
            style={{ width: "500%", maxWidth: "500px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
