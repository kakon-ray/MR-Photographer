import React, { useState } from "react";

import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { useLocation, useNavigate } from "react-router-dom";
import {
  useAuthState,
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

import auth from "../../../firebase.init";
import { toast, ToastContainer } from "react-toastify";

const SocialLogin = () => {
  let navigate = useNavigate();
  let location = useLocation();

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [user1, loading1, error1] = useAuthState(auth);
  const [signInWithFacebook, fbUser, fbLoading, errorFb] =
    useSignInWithFacebook(auth);

  let from = location.state?.from?.pathname || "/";

  let errorelement;

  if (error) {
    errorelement = <p className="text-center text-danger">{error?.message}</p>;
  }

  if (user1) {
    navigate(from, { replace: true });
  } else if (error1) {
    errorelement = <p className="text-center text-danger">{error?.message}</p>;
  }

  return (
    <div className="mt-3">
      <ToastContainer position="top-center" reverseOrder={false} />
      {errorelement}
      <div className="d-flex align-items-center justify-content-center">
        <div
          style={{ height: "1px", backgroundColor: "lightgray" }}
          className=" w-25"
        ></div>
        <p className="px-2 mt-2">or</p>
        <div
          style={{ height: "1px", backgroundColor: "lightgray" }}
          className=" w-25"
        ></div>
      </div>

      <div className="icon-auth text-center d-flex flex-column justify-content-center">
        <button
          onClick={() =>
            signInWithGoogle()
              .then((res) => {})
              .then((error) => {
                errorelement = (
                  <p className="text-center text-danger">{error?.message}</p>
                );
              })
          }
          style={{
            height: "40px",
            borderRadius: "25px",
            backgroundColor: "#579581",
            color: "#F5F5F5",
          }}
          className="btn  w-50 my-2 mx-auto"
        >
          <FaGoogle style={{ fontSize: "20px" }} />
          <span className="ms-2">Sign in Google</span>
        </button>
        <button
          onClick={() => {
            signInWithFacebook()
              .then((res) => {})
              .then((error) => {});
          }}
          style={{
            height: "40px",
            borderRadius: "25px",
            backgroundColor: "#000080",
            color: "#D3D3D3",
          }}
          className="btn w-50 my-2 mx-auto"
        >
          <FaFacebookF style={{ fontSize: "20px" }} />
          <span className="ms-1">Sign in Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
