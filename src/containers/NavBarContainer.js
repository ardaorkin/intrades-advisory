import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBarContainer() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        variant="dark"
        className="navbar-container"
      >
        <Container>
          <Navbar.Brand href="#home">Intrades Advisory</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#industries">Industries</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarContainer;
