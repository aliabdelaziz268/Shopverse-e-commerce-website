import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/slices/authSlice";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.authSlice);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    let errors = {};

    if (!form.name.trim()) {
      errors.name = "Name is required";
    } else if (form.name.length < 3) {
      errors.name = "Name must be at least 3 characters";
    } else if (!/^[A-Za-z\s]+$/.test(form.name)) {
      errors.name = "Name must contain only letters";
    }

    if (!form.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(form.email)) {
      errors.email =
        "Email must be a valid Gmail address (e.g. example@gmail.com)";
    }

    if (!form.password) {
      errors.password = "Password is required";
    } else if (form.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    if (!form.confirm) {
      errors.confirm = "Please confirm your password";
    } else if (form.password !== form.confirm) {
      errors.confirm = "Passwords do not match";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      dispatch(registerUser(form)).then((res) => {
        if (!res.error) navigate("/login");
      });
    }
  };

  const getBorderColor = (field) => {
    if (validationErrors[field]) return "red";
    if (form[field]) return "green";
    return "";
  };

  return (
    <Container className="mt-5">
      <Row className="align-items-center justify-content-around">
        <Col md={6} className="text-center">
          <img
            src="https://i.pinimg.com/1200x/9c/da/2c/9cda2cc486103a9ae4b36f5ae5178c70.jpg"
            style={{ width: "500%", maxWidth: "500px" }}
          />
        </Col>

        <Col
          md={6}
          className="mb-2 mt-5 p-3 rounded"
          style={{
            border: "1px solid #ccc",
            boxShadow: "0 2px 6px 5px rgba(0, 0, 0, 0.1)",
            maxWidth: "400px",
          }}
        >
          <h3 className="text-center mb-3 fw-bold text-success">Register</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your Name"
                value={form.name}
                onChange={handleChange}
                style={{
                  borderColor: getBorderColor("name"),
                  borderWidth: "2px",
                  padding: "10px",
                }}
              />
              {validationErrors.name && (
                <small className="text-danger">{validationErrors.name}</small>
              )}
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Control
                type="text"
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

            <Form.Group className="mb-2">
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

            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                name="confirm"
                placeholder="Confirm your Password"
                value={form.confirm}
                onChange={handleChange}
                style={{
                  borderColor: getBorderColor("confirm"),
                  borderWidth: "2px",
                  padding: "10px",
                }}
              />
              {validationErrors.confirm && (
                <small className="text-danger">
                  {validationErrors.confirm}
                </small>
              )}
            </Form.Group>

            {error && (
              <div className="text-danger text-center mb-2">{error}</div>
            )}

            <Button type="submit" className="w-100 btn btn-success mt-2">
              Register
            </Button>
          </Form>

          <p className="mt-3 text-center">
            Already have an account?{" "}
            <NavLink
              to="/login"
              className="text-success fw-semibold text-decoration-none"
            >
              Login
            </NavLink>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
