import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useServices from "../../Hook/useServices";

const Services = () => {
  const navigate = useNavigate();
  // use custome hook and get services data
  const [service, setService] = useServices();

  console.log(service);
  return (
    <div className="container my-4">
      <h1 className="text-center my-4">Our Services</h1>
      <div className="row">
        {service.map((item) => {
          return (
            <div className="col-md-4" key={item.id}>
              <Card className="text-center">
                <Card.Img
                  variant="top"
                  className="img-fluid"
                  src={item.img}
                  style={{ height: "200px" }}
                />
                <Card.Body>
                  <h4>{item.name}</h4>
                  <Card.Text>{item.description}</Card.Text>
                  <h4>{item.price}</h4>
                  <Button
                    variant="success"
                    className="d-block mx-auto"
                    onClick={() => navigate("/checkout")}
                  >
                    Go To Checkout
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
