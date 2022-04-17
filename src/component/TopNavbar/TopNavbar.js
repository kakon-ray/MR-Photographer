import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./TopNavbar.css";

const TopNavbar = () => {
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
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Button variant="outline-success" className="mx-2 py-1 my-2">
                Sign up
              </Button>
              <Button variant="success" className="mx-2 py-1 my-2">
                Sign in
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopNavbar;
