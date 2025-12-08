import React from "react";
import { Container, Row, Col, Button, Image, ListGroup } from "react-bootstrap";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addToCart, removeFromWishlist } from "../store/slices/cartSlice";

const Wishlist = () => {
  const { wishlistItems } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4 fw-bold">Favorites List</h2>

      {wishlistItems.length === 0 ? (
        <p className="text-center text-muted">The list is currently empty.</p>
      ) : (
        <ListGroup variant="flush">
          {wishlistItems.map((item) => (
            <ListGroup.Item
              key={item.id}
              className="mb-3 p-3 border rounded shadow-sm"
            >
              <Row className="align-items-center">
                <Col md={3} className="text-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    rounded
                    fluid
                    style={{ height: "150px", objectFit: "cover" }}
                  />
                </Col>

                <Col md={6}>
                  <h5 className="fw-semibold">{item.title}</h5>
                  <p className="text-muted mb-1">Price: {item.price} $</p>
                  <NavLink>
                    <Button
                      size="sm"
                      className="mt-2 btn btn-success fw-bold"
                      onClick={() => dispatch(addToCart(item))}
                    >
                      Add to cart <BsFillCartPlusFill size={20} />
                    </Button>
                  </NavLink>
                </Col>

                <Col md={3} className="text-center">
                  <Button
                    variant="outline-danger"
                    onClick={() => dispatch(removeFromWishlist(item.id))}
                  >
                    Delete from favorites
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Container>
  );
};

export default Wishlist;
