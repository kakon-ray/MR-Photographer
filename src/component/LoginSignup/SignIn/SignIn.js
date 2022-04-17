import React, { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./SignIn.css";

export default function SignIn() {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const signIn = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password).then((res) => {
      setTimeout(navigate(from, { replace: true }), 2000);
    });
  };

  return (
    <div className="mt-4 container">
      <div className="form-responsive mx-auto">
        <div className="mx-auto rounded-0">
          <div className="p-5">
            <Form onSubmit={signIn}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  className="rounded-0"
                  ref={emailRef}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  className="rounded-0"
                  ref={passwordRef}
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
              <span
                className="text-success "
                style={{ cursor: "pointer", fontWeight: "bold" }}
              >
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
