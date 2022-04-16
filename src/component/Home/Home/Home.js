import React from "react";
import Blog from "../../Blog/Blog";
import Services from "../../Services/Services";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <Blog />
      <Services />
    </div>
  );
};

export default Home;
