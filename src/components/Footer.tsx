import { Button, Container, Nav, Navbar as NavbarBs, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
export function Footer() {
  return (

      <>
      <NavbarBs className="navbar navbar-dark bg-dark">
      <Container >
      <Nav.Link to="/" as={NavLink}>
            Emerson Pinheiro 2022
          </Nav.Link>
      </Container>
      </NavbarBs>
      </>


  );
}
