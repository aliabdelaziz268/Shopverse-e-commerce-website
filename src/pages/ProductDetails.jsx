import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Card,
  Badge,
} from "react-bootstrap";
import { BsFillCartPlusFill } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getProductByIdAction } from "../store/slices/productSlice";
import { OrbitProgress } from "react-loading-indicators";
import { addToCart, addToWishlist } from "../store/slices/cartSlice";

const ProductDetails = () => {
  const { product, isLoading, errors } = useSelector(
    (state) => state.productSlice
  );
  const { id } = useParams();
  // console.log(id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductByIdAction(id));
  }, [dispatch, id]);
  if (isLoading)
    return (
      <div className="text-center mt-5">
        <OrbitProgress color="#32cd32" size="medium" text="" textColor="" />
      </div>
    );

  if (errors)
    return <p className="text-danger text-center mt-5">Error: {errors}</p>;
  return (
    <Container className="py-5">
      <Row className="g-4">
        <Col md={5} className="text-center">
          <Image
            src={product.image}
            alt={product.title}
            rounded
            fluid
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </Col>

        <Col md={7}>
          <h2 className="fw-bold">{product.title}</h2>

          <div className="d-flex align-items-center mb-2">
            <Badge bg="warning" text="dark" className="me-2">
              {product.category}
            </Badge>
            <Badge bg="info" text="dark">
              {product.brand}
            </Badge>
          </div>

          <p className="text-muted">{product.description}</p>

          <div className="mb-3">
            <h4 className="fw-bold mb-0 text-success">
              {(
                product.price -
                (product.price * product.discount) / 100
              ).toFixed(2)}
              $
            </h4>
            <small className="text-decoration-line-through text-muted me-2">
              {product.price}$
            </small>
            <Badge bg="danger">-{product.discount}% OFF</Badge>
          </div>

          <p>
            <strong>Rating:</strong>{" "}
            <span className="text-warning">
              {"★".repeat(Math.round(product.rating?.rate || 0))}
              {"☆".repeat(5 - Math.round(product.rating?.rate || 0))}
            </span>{" "}
            ({product.rating?.count} reviews)
          </p>

          <p>
            <strong>Stock:</strong>{" "}
            {product.stock > 0 ? (
              <Badge bg="success">Available ({product.stock})</Badge>
            ) : (
              <Badge bg="danger">Out of Stock</Badge>
            )}
          </p>

          <div className="mt-4 d-flex gap-3">
            <NavLink>
              <Button
                className="btn btn-success"
                size="lg"
                onClick={() => dispatch(addToCart(product))}
              >
                Add to Cart <BsFillCartPlusFill size={30} color="white" />
              </Button>
            </NavLink>
            <NavLink>
              <Button
                variant="outline-success"
                size="lg"
                onClick={() => dispatch(addToWishlist(product))}
              >
                Add to Wishlist <MdFavoriteBorder size={30} color="green" />
              </Button>
            </NavLink>
          </div>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={12}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title className="fw-bold">
                Additional Information
              </Card.Title>
              <Card.Text>
                - Free shipping for orders over 100$
                <br /> - 14-day easy returns
                <br /> - Cash on delivery available
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
