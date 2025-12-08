import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsCart4 } from "react-icons/bs";
import { FaProductHunt } from "react-icons/fa";
import { MdFavoriteBorder, MdOutlineContactPhone } from "react-icons/md";
import { TiHomeOutline } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../store/slices/authSlice";
import { setCategoryFilter, searchProducts } from "../store/slices/productSlice";

function Header() {
  const { CartCount, WishlistCount } = useSelector((state) => state.cartSlice);
  const { user } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchProducts(searchTerm));
    navigate("/products");
  };
  return (
    <>
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <NavLink to="/" className="text-decoration-none">
              <Navbar.Brand className=" fw-bold text-success">
                Shopverse
              </Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <div className="ms-5 pt-2">
                  <TiHomeOutline color="green" size={20} />
                </div>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link text-success" : " nav-link"
                  }
                  to="/"
                >
                  Home
                </NavLink>
                <div className="ms-5 pt-2">
                  <FaProductHunt color="green" size={20} />
                </div>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive ? "nav-link text-success" : " nav-link"
                  }
                >
                  Products
                </NavLink>
                <div className="ms-5 pt-2">
                  <MdOutlineContactPhone color="green" size={20} />
                </div>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "nav-link text-success" : " nav-link"
                  }
                >
                  Contact
                </NavLink>
              </Nav>
              <Form className="d-flex" onSubmit={handleSearch}>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    dispatch(searchProducts(e.target.value));
                  }}
                />
                <Button variant="outline-success me-5" type="submit">Search</Button>
              </Form>

              <NavLink className="me-5" to="/wishlist">
                <MdFavoriteBorder color="green" size={30} />
                {WishlistCount > 0 && (
                  <span
                    className="position-absolute top-5 start-80 translate-middle badge rounded-pill bg-danger"
                    style={{ fontSize: "0.75rem" }}
                  >
                    {WishlistCount}
                  </span>
                )}
              </NavLink>
              <NavLink className="me-5" to="/cart">
                <BsCart4 color="green" size={30} />
                {CartCount > 0 && (
                  <span
                    className="position-absolute top-5 start-80 translate-middle badge rounded-pill bg-danger"
                    style={{ fontSize: "0.75rem" }}
                  >
                    {CartCount}
                  </span>
                )}
              </NavLink>
              {user ? (
                <>
                  <Button variant="success mx-2">{user.name}</Button>
                  <Button variant="outline-danger" onClick={handleLogout}>
                    Logout
                  </Button>
                </>
              ) : (
                <NavLink to="/login">
                  <Button variant="success">Login</Button>
                </NavLink>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
