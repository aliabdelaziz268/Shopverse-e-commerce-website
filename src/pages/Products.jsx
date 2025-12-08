import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { IoEyeSharp } from "react-icons/io5";
import { BsFillCartPlusFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Badge, Pagination, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAction } from "../store/slices/productSlice";
import { OrbitProgress } from "react-loading-indicators";
import { addToCart, addToWishlist } from "../store/slices/cartSlice";

function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const { filteredProducts, isLoading, errors } = useSelector(
    (state) => state.productSlice
  );

  const dispatch = useDispatch();
  // console.log(products);

  useEffect(() => {
    dispatch(getAllProductsAction());
  }, [dispatch]);
  if (isLoading)
    return (
      <div className="text-center mt-5">
        <OrbitProgress color="#32cd32" size="medium" text="" textColor="" />
      </div>
    );

  if (errors)
    return <p className="text-danger text-center mt-5">Error: {errors}</p>;
  const productsPerPage = 8;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleNext = () => {
    if (currentPage < Math.ceil(filteredProducts.length / productsPerPage)) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <>
      <div>
        <h1 className=" text-center my-3">Our Products</h1>
      </div>
      <div className=" d-flex flex-wrap justify-content-around my-3">
        {currentProducts.map((product, index) => (
          <Card
            style={{ width: "18rem" }}
            key={product.id}
            className="m-2 shadow-sm"
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            <div
              style={{
                width: "100%",
                height: "200px",
                backgroundColor: "#f8f9fa",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
                style={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  objectFit: "contain",
                  backgroundColor: "white",
                }}
              />
            </div>
            <Card.Body>
              <Card.Text className=" text-center fs-5">
                {product.title}
              </Card.Text>
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
              <div className=" text-center d-flex justify-content-around ">
                <NavLink to={`/product/${product.id}`}>
                  <IoEyeSharp size={30} color="green" />
                </NavLink>
                <NavLink>
                  <MdFavorite
                    size={30}
                    color="green"
                    onClick={() => dispatch(addToWishlist(product))}
                  />
                </NavLink>
                <NavLink>
                  <BsFillCartPlusFill
                    size={30}
                    color="green"
                    onClick={() => dispatch(addToCart(product))}
                  />
                </NavLink>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-4">
        <Pagination>
          <Pagination.Prev onClick={handlePrev} disabled={currentPage === 1} />
          <Pagination.Item active>{currentPage}</Pagination.Item>
          <Pagination.Next
            onClick={handleNext}
            disabled={
              currentPage ===
              Math.ceil(filteredProducts.length / productsPerPage)
            }
          />
        </Pagination>
      </div>
    </>
  );
}

export default Products;
