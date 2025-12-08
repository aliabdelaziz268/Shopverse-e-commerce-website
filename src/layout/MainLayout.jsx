import React, { useEffect } from "react";
import SharedLayout from "./SharedLayout";
import Products from "../pages/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import NotFound from "../pages/NotFound";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import Contact from "../pages/Contact";
import OrderShipped from "../pages/OrderShipped";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import AOS from "aos";


function MainLayout() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/orderShipped" element={<OrderShipped />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default MainLayout;
