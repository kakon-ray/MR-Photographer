import React from "react";
import { Button } from "react-bootstrap";
import img1 from "../../images/about.png";
const About = () => {
  return (
    <div className="container my-4">
      <div className="row d-flex align-items-center">
        <div className="col-md-6">
          <h3>April Ryan</h3>
          <p className="text-secondary">
            Veri ubique cu eam, vero dicta ridens ei quo, ex putent menandri
            accommodare sed. Suscipit lobortis prodesset ut eam. Sale dicta
            dolore pri et, an aliquam albucius volutpat est.
          </p>
          <Button variant="success">Go To Checkout</Button>
        </div>
        <div className="col-md-6">
          <img
            src={img1}
            style={{ width: "500px", height: "500px" }}
            className="img-fluid rounded"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
