import React from "react";
import About from "../../About/About";
import Blog from "../../Blog/Blog";
import Services from "../../Services/Services";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <>
      <Slider />
      <About />
      <Services />
    </>
  );
};

export default Home;
