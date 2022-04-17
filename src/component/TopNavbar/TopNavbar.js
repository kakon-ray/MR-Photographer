import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./TopNavbar.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const TopNavbar = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link
            to="/"
            className="navbar-brand"
            style={{ fontWeight: "700", color: "#579581" }}
          >
            {" "}
            MR.PHOTOGRAPHER
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link
                to="/"
                className="nav-link"
                style={{ textDecoration: "none" }}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="nav-link"
                style={{ textDecoration: "none" }}
              >
                Services
              </Link>
              <Link
                to="/about"
                className="nav-link"
                style={{ textDecoration: "none" }}
              >
                About
              </Link>
              <Link
                to="/blog"
                className="nav-link"
                style={{ textDecoration: "none" }}
              >
                Blog
              </Link>
            </Nav>
            <Nav>
              <Button
                variant="outline-success"
                className="mx-2 py-1 my-2"
                onClick={() => navigate("/signup")}
              >
                Sign up
              </Button>
              {!user?.email ? (
                <Button
                  variant="success"
                  className="mx-2 py-1 my-2"
                  onClick={() => navigate("/signin")}
                >
                  Sign in
                </Button>
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
    </div>
  );
};

export default TopNavbar;
