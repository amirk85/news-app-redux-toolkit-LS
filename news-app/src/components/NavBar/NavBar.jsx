import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import SearchBox from "./SearchBox/SearchBox";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { FAV_DATA } from "../../context/article-slice";
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
            <NavLink style={{ marginRight: "2rem" }} to="/">
              Home
            </NavLink>
            <NavLink to="/favourites">
              Favourites &nbsp;
              <span className="fav_count">{favCount}</span>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <SearchBox />
    </Navbar>
  );
}
