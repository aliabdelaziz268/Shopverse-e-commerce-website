import React from 'react';
import { FaShippingFast, FaHeadset, FaUndo, FaLock } from 'react-icons/fa';
import { Container, Row, Col, Card } from 'react-bootstrap';

const featuresData = [
    {
        icon: <FaShippingFast size={40} className="text-primary mb-3" />,
        title: "Free Shipping",
        text: "On all orders over $100"
    },
    {
        icon: <FaHeadset size={40} className="text-primary mb-3" />,
        title: "24/7 Support",
        text: "Contact us anytime"
    },
    {
        icon: <FaUndo size={40} className="text-primary mb-3" />,
        title: "Easy Returns",
        text: "30-day return policy"
    },
    {
        icon: <FaLock size={40} className="text-primary mb-3" />,
        title: "Secure Payment",
        text: "100% secure payment"
    }
];

const Features = () => {
    return (
        <section className="section-padding bg-white">
            <Container>
                <Row>
                    {featuresData.map((feature, index) => (
                        <Col md={3} sm={6} key={index} className="mb-4 mb-md-0">
                            <Card
                                className="text-center h-100 py-4 border-0 shadow-sm"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <Card.Body>
                                    {feature.icon}
                                    <Card.Title className="fw-bold">{feature.title}</Card.Title>
                                    <Card.Text className="text-muted">{feature.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Features;
