import React from "react";
import { Button } from "react-bootstrap";
import img1 from "../../images/about.png";
const About = () => {
  return (
    <div className="container my-4">
      <div className="row d-flex align-items-center">
        <div className="col-md-6">
          <h3>Kakon Ray</h3>
          <p className="text-secondary">
            Hello I am Kakon Ray. I am a Self learner. Now i am student
            Programming Hero. I always try to learn everything you work so hard
            I have already learned a lot of things on my own.I have gained the
            confidence to do professional work in a very short time after
            clicking this programming-hero course.God willing ! I believe that
            in the next two months, I will be able to work
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
