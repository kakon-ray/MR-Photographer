import React from "react";
import "./CheckOut.css";
import useServices from "../../Hook/useServices";
import { Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

const CheckOut = () => {
  const [service, setService] = useServices();
  return (
    <div className="container">
      <ToastContainer position="top-center" />
      <table id="customers" className="my-5">
        <tr>
          <th>Name</th>
          <th>Service Rate</th>
          <th>Email</th>
          <th>Phone </th>
        </tr>
        {service.map((item) => {
          return (
            <tr>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          );
        })}
      </table>
      <div>
        <Button
          variant="success"
          className="d-block ms-auto"
          onClick={() => toast.success("Thank You for Booking")}
        >
          Checkout Now
        </Button>
      </div>
    </div>
  );
};

export default CheckOut;
