import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

export default function SignUp() {
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
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter Password"
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
            Already have a account?{" "}
            <Link to="/signin" style={{ textDecoration: "none" }}>
              <span
                className="text-success"
                style={{ cursor: "pointer", fontWeight: "bold" }}
              >
                Please Login
              </span>
            </Link>
          </p>
        </div>
        <SocialLogin />
      </div>
    </div>
  );
}
