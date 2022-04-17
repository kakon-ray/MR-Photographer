import React from "react";
import Blog from "../../Blog/Blog";
import Services from "../../Services/Services";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <>
      <Slider />
      <Blog />
      <Services />
    </>
  );
};

export default Home;
