import React from "react";
import Slider from "../components/Slider";
import Products from "./Products";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";

function Home() {
  return (
    <>
      <div>
        <Slider />
        <Features />
        <Products />
        <Testimonials />
        <Newsletter />
      </div>
    </>
  );
}

export default Home;
