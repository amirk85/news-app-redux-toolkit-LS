import React from "react";
import "./NavBar.css";

import {
  Navbar,
  Container,
  Nav,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>News App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <Nav.Link>Home</Nav.Link>
            </NavLink>
            <NavLink to="/favourites" style={{ textDecoration: "none" }}>
              <Nav.Link>Favourites</Nav.Link>
            </NavLink>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                style={{ marginLeft: "6rem" }}
              />
              <Button size="sm" variant="primary">
                <i class="fa-solid fa-magnifying-glass"></i>
              </Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
        <Button variant="warning">Log out</Button>
      </Container>
    </Navbar>
  );
}
