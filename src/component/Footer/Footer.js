import React from "react";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import { AiFillYoutube } from "react-icons/ai";
import "./Footer.css";
import FooterList from "./FooterList";

const Footer = () => {
  return (
    <div className="container-fluid py-5" id="footer">
      <div className="row">
        <div className="col-md-3">
          <h2 style={{ color: "#579581" }}>MR.Photographer</h2>
          <p className="text-secondary">
            <span>Mr.Photographer </span> We're Tilia, a team of photographers &
            videographers. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium. Est sale definitiones
            id. Ut quo quem harum munere, eu labore voluptatum mei.
          </p>
          <div className="d-flex gap-4 flex-wrap footer-icon mb-sm-5">
            <div>
              <AiFillYoutube style={{ fontSize: "40px", color: "#579581" }} />
            </div>
            <div>
              <AiFillYoutube style={{ fontSize: "40px", color: "#579581" }} />
            </div>
            <div>
              <AiFillYoutube style={{ fontSize: "40px", color: "#579581" }} />
            </div>
            <div>
              <AiFillYoutube style={{ fontSize: "40px", color: "#579581" }} />
            </div>
          </div>
        </div>

        <FooterList
          title="INFORMATION"
          li1="Home"
          li2="About"
          li3="Privacy Policy"
          li4="Frequently Questions"
          li5="Order Tracking"
        />
        <FooterList
          title="Follow"
          li1="Follow Me Facebook"
          li2="Follow Me Twitter"
          li3="Follow Me Instagram"
          li4="Follow Me Youtube"
          li5="Follow Me Vimeo"
        />
        <div className="col-md-3 footer-subscription ml-0 ">
          <h1 className="ml-0" style={{ color: "#579581" }}>
            NEWSLETTER
          </h1>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Button
            </Button>
          </InputGroup>
        </div>
      </div>
    </div>
  );
};

export default Footer;
