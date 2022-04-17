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
            <h3>Looking for a phLotograher</h3>
            <p className="w-50 mx-auto">
              We love photography and travel for meeting new beautiful people
              all over the world.
            </p>
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
            <p className="w-50 mx-auto">
              Propriae voluptaria dissentias nam ei, posse diceret inciderint
              cum ut, gubergren sadipscing ei vim. Ancillae torquatos in nec,
              impetus nostrum ea eos.
            </p>
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
            <p className="w-50 mx-auto">
              Propriae voluptaria dissentias nam ei, posse diceret inciderint
              cum ut, gubergren sadipscing ei vim. Ancillae torquatos in nec,
              impetus nostrum ea eos.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
