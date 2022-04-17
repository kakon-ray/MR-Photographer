import React from "react";
import { Spinner } from "react-bootstrap";

const Loding = () => {
  return (
    <div className="text-center mt-5">
      <Spinner animation="border" variant="success" className="text-center" />
    </div>
  );
};

export default Loding;
