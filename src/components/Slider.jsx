import React, { useEffect } from "react";
import { Row, Col, Carousel, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import image1 from "../assets/Electronic.webp";
import image2 from "../assets/5.jpg";
import image3 from "../assets/3.jpg";
import {
  getAllProductsAction,
  setCategoryFilter,
} from "../store/slices/productSlice";
import { OrbitProgress } from "react-loading-indicators";

function Slider() {
  const dispatch = useDispatch();
  const { categories, selectedCategory, isLoading, errors } = useSelector(
    (state) => state.productSlice
  );

  useEffect(() => {
    dispatch(getAllProductsAction());
  }, [dispatch]);

  return (
    <Row className="mt-4 ">
      <Col md={2} className="mb-4 ">
        <div
          className="p-3  d-flex flex-column align-items-center"
          style={{ minHeight: "200px" }}
        >
          <h5 className="fw-bold text-success mb-3">Categories</h5>

          {isLoading ? (
            <OrbitProgress color="#32cd32" size="medium" text="" textColor="" />
          ) : errors ? (
            <p className="text-danger text-center">{errors}</p>
          ) : (
            <Dropdown className="w-100">
              <Dropdown.Toggle
                variant="outline-success"
                id="dropdown-basic"
                className="w-100"
              >
                {selectedCategory || "Select Category"}
              </Dropdown.Toggle>

              <Dropdown.Menu
                className="w-100 text-center"
                style={{ maxHeight: "200px", overflowY: "auto" }}
              >
                {categories.map((cat, index) => (
                  <Dropdown.Item
                    key={index}
                    className={
                      selectedCategory === cat ? "text-success fw-bold" : ""
                    }
                    onClick={() => dispatch(setCategoryFilter(cat))}
                  >
                    {cat}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          )}
        </div>
      </Col>

      <Col md={10}>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 "
              src={image1}
              alt="First slide"
              style={{ height: "400px", objectFit: "contain" }}
            />
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={image2}
              alt="Second slide"
              style={{ height: "400px", objectFit: "cover" }}
            />
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={image3}
              alt="Third slide"
              style={{ height: "400px", objectFit: "contain" }}
            />
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  );
}

export default Slider;
