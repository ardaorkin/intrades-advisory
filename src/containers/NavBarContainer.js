import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.svg";
function NavBarContainer({ startAnimation, ...props }) {
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
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about" onClick={startAnimation}>
                About Us
              </Nav.Link>
              <Nav.Link href="#products" onClick={startAnimation}>
                Products
              </Nav.Link>
              <Nav.Link href="#pricing" onClick={startAnimation}>
                Pricing
              </Nav.Link>
              <Nav.Link href="#contact" onClick={startAnimation}>
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarContainer;
