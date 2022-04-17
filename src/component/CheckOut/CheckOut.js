import React from "react";
import "./CheckOut.css";
import useServices from "../../Hook/useServices";
import { Button } from "react-bootstrap";

const CheckOut = () => {
  const [service, setService] = useServices();
  return (
    <div className="container">
      <table id="customers" className="my-5">
        <tr>
          <th>Product Name</th>
          <th>Product Price</th>
        </tr>
        {service.map((item) => {
          return (
            <tr>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          );
        })}
      </table>
      <div>
        <Button variant="success" className="d-block ms-auto">
          Checkout Now
        </Button>
      </div>
    </div>
  );
};

export default CheckOut;
