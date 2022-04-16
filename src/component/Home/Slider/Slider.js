import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../../images/banner1.jpg";
import img2 from "../../../images/banner2.jpg";
import img3 from "../../../images/banner3.jpg";
import "./Slider.css";
const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "560px" }}
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Looking for a photograher</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "560px" }}
            src={img3}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Looking for a Videograher</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "560px" }}
            src={img2}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>I am Photographer</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
