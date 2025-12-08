import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
    {
        name: "John Doe",
        role: "Regular Customer",
        text: "The quality of the products is amazing! I will definitely shop here again."
    },
    {
        name: "Jane Smith",
        role: "Fashion Enthusiast",
        text: "Fast shipping and great customer service. Highly recommended!"
    },
    {
        name: "Mike Johnson",
        role: "Verified Buyer",
        text: "I love the variety of styles available. Found exactly what I was looking for."
    }
];

const Testimonials = () => {
    return (
        <section className="section-padding bg-light">
            <Container>
                <div className="section-title text-center">
                    <h2 className="display-6 fw-bold">What Our Customers Say</h2>
                </div>
                <Row>
                    {testimonials.map((item, index) => (
                        <Col md={4} key={index} className="mb-4 mb-md-0">
                            <Card
                                className="h-100 border-0 shadow-sm p-4"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <Card.Body>
                                    <FaQuoteLeft className="text-primary fs-3 mb-3 opacity-50" />
                                    <Card.Text className="fst-italic mb-4">"{item.text}"</Card.Text>
                                    <div className="d-flex align-items-center">
                                        <div className="ms-0">
                                            <h6 className="mb-0 fw-bold">{item.name}</h6>
                                            <small className="text-muted">{item.role}</small>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Testimonials;
