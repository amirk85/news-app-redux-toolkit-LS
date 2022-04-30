import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import SearchBox from "./SearchBox";

export default function NavBar() {
  return (
    <Navbar bg="primary" expand="lg" className="nav__container">
      <Container>
        <Navbar.Brand style={{ color: "white", marginRight: "2rem" }}>
          News App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/favourites">Favourites</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <SearchBox />
    </Navbar>
  );
}
