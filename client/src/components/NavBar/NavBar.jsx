import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import SearchBox from "./SearchBox/SearchBox";
import Badge from "@mui/material/Badge";
import { FAV_DATA } from "../../store/article-slice";
import { useSelector } from "react-redux";

export default function NavBar() {
  const favCount = useSelector(FAV_DATA).length;

  return (
    <Navbar bg="primary" expand="lg" className="nav__container">
      <Container>
        <Navbar.Brand style={{ color: "white", marginRight: "2rem" }}>
          <h4>News App</h4>
        </Navbar.Brand>
        <Navbar.Toggle className="side_bar" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              className="nav_link"
              style={{ marginRight: "2rem" }}
              to="/"
            >
              Home
            </NavLink>
            <Badge badgeContent={favCount} color="secondary">
              <NavLink className="nav_link" to="/favourites">
                Favourites
              </NavLink>
            </Badge>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <SearchBox />
    </Navbar>
  );
}
