import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.svg";
function NavBarContainer() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        fixed="top"
        bg="transparent"
        variant="dark"
        className="navbar-container"
      >
        <Container>
          <Navbar.Brand
            href="#home"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <img
              src={logo}
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="Intrades Advisory logo"
            />
            Intrades Advisory
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
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
