import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

import "./SignIn.css";

export default function SignIn() {
  return (
    <div className="mt-4">
      <div className="form-responsive mx-auto">
        <div className="mx-auto rounded-0">
          <div className="p-5">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  className="rounded-0"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  className="rounded-0"
                />
              </Form.Group>

              <Button className="btn btn-success w-100" type="submit">
                Submit
              </Button>
            </Form>
          </div>
          <p className="text-center">
            Don't have account?{" "}
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <span className="text-info " style={{ cursor: "pointer" }}>
                Create an account
              </span>
            </Link>
          </p>
        </div>
        <SocialLogin />
      </div>
    </div>
  );
}
