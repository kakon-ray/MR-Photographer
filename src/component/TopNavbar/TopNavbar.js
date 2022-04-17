import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./TopNavbar.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import CustomLInk from "../CustomLink/CustomLInk";
import img from "../../images/userphoto.webp";
const TopNavbar = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  return (
    <>
      <Navbar bg="light" expand="lg" className="sticky-top">
        <Container>
          <Link to="/" className="navbar-brand" style={{ fontWeight: "700" }}>
            {" "}
            <span style={{ color: "#f79837" }}> MR.</span>
            <span style={{ color: "#579581" }}>PHOTOGRAPHER</span>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <CustomLInk to="/" className="nav-link">
                Home
              </CustomLInk>
              <CustomLInk to="/services" className="nav-link">
                Services
              </CustomLInk>
              <CustomLInk to="/about" className="nav-link">
                About
              </CustomLInk>
              <CustomLInk to="/blog" className="nav-link">
                Blog
              </CustomLInk>
            </Nav>
            {user?.email ? (
              <Nav>
                <NavDropdown
                  title={
                    <img
                      src={user?.photoURL ? user?.photoURL : img}
                      style={{
                        width: "35px",
                        height: "35px",
                        borderRadius: "50px",
                        border: "1px solid gray",
                      }}
                      alt=""
                    />
                  }
                  id="basic-nav-dropdown"
                >
                  <div className="p-2">
                    <h6>{user?.displayName}</h6>
                    <h6>{user?.email}</h6>
                    <Button
                      variant="success"
                      className="py-1 my-2"
                      onClick={() => signOut(auth)}
                    >
                      Sign out
                    </Button>
                  </div>
                </NavDropdown>
              </Nav>
            ) : (
              ""
            )}
            <Nav>
              {!user?.email ? (
                <>
                  <Button
                    variant="outline-success"
                    className="mx-2 py-1 my-2"
                    onClick={() => navigate("/signup")}
                  >
                    Sign up
                  </Button>
                  <Button
                    variant="success"
                    className="mx-2 py-1 my-2"
                    onClick={() => navigate("/signin")}
                  >
                    Sign in
                  </Button>
                </>
              ) : (
                <Button
                  variant="success"
                  className="mx-2 py-1 my-2"
                  onClick={() => signOut(auth)}
                >
                  Sign out
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNavbar;
