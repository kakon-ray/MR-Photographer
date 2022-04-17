import React from "react";
import img from "../../images/404.png";
const ErrorPage = () => {
  return (
    <div className="container">
      <div className="row">
        <img src={img} className="img-fluid w-100" alt="" />
      </div>
    </div>
  );
};

export default ErrorPage;
