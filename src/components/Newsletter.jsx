import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Newsletter = () => {
    return (
        <section
            className="section-padding bg-primary text-white text-center"
            data-aos="fade-in"
        >
            <Container>
                <Row className="justify-content-center">
                    <Col md={8} lg={6}>
                        <h2 className="fw-bold mb-3">Subscribe to Our Newsletter</h2>
                        <p className="mb-4">Get the latest updates, exclusive deals, and more delivered to your inbox.</p>
                        <Form className="d-flex flex-column flex-sm-row gap-2 justify-content-center">
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                className="form-control-lg border-0"
                                style={{ maxWidth: '400px' }}
                            />
                            <Button variant="dark" size="lg" className="px-4">Subscribe</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Newsletter;
