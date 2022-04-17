import React, { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { async } from "@firebase/util";
import { toast, ToastContainer } from "react-toastify";
export default function SignUp() {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const ConformPasswordRef = useRef("");

  let navigate = useNavigate();
  let location = useLocation();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, error1] = useUpdateProfile(auth);

  const singUp = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const conformPassword = ConformPasswordRef.current.value;

    //check input null
    if (!email || !name || !password || !conformPassword) {
      toast.error("Please fulfillment input filed");
      return;
    }

    // password check
    if (password !== conformPassword) {
      toast.error("Two Password does not match");
      return;
    }
    if (password.length < 6) {
      toast.error("At least 6 characters set password");
      return;
    }

    await createUserWithEmailAndPassword(email, password)
      .then((res) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
    await updateProfile({ displayName: name });

    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
    conformPassword.current.value = "";
  };

  let from = location.state?.from?.pathname || "/";

  return (
    <div className="mt-4">
      <ToastContainer position="top-center" reverseOrder={false} />
      <div className="form-responsive mx-auto">
        <div className="mx-auto rounded-0">
          <div className="p-5">
            <Form onSubmit={singUp}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  type="name"
                  placeholder="Enter Name"
                  className="rounded-0"
                  ref={nameRef}
                />
              </Form.Group>
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
              <Form.Group className="mb-3" controlId="formBasicConformPassword">
                <Form.Control
                  type="password"
                  placeholder="Enter Conform Password"
                  className="rounded-0"
                  ref={ConformPasswordRef}
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
