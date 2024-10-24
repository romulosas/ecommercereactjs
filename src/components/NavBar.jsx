import CartWidget from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark" sticky="top">
      <Container fluid={true}>
        <Navbar.Brand as={Link} to="/">
          Online Store
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="category/beauty">
            beauty
          </Nav.Link>
          <Nav.Link as={Link} to="category/fragrances">
            fragrances
          </Nav.Link>
          <Nav.Link as={Link} to="category/furniture">
            furniture
          </Nav.Link>
          <Nav.Link as={Link} to="category/groceries">
            groceries
          </Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default NavBar;
