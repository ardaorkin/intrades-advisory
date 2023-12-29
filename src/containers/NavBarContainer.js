import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.svg";
import { useAtom } from "jotai";
import { languageChoiceWithPersistence } from "../store";

function NavBarContainer({ startAnimation, ...props }) {
  const [language, setLanguage] = useAtom(languageChoiceWithPersistence);
  const handleLanguage = () => {
    if (language === "tr") {
      setLanguage("en");
    } else {
      setLanguage("tr");
    }
  };
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
            <div
              style={{
                display: "block",
                textAlign: "start",
              }}
            >
              <h5>
                {language === "en"
                  ? "Intrades Advisory"
                  : "Intrades Danışmanlık"}
              </h5>
              <p>
                {language === "en"
                  ? "Intrades Foreign Trade Consulting and Marketing Limited Company."
                  : "Intrades Dış Ticaret Danışmanlık ve Pazarlama Limited Şirketi"}
              </p>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="#home">
                {language === "en" ? "Home" : "Ana Sayfa"}
              </Nav.Link>
              <Nav.Link href="#about" onClick={startAnimation}>
                {language === "en" ? "About Us" : "Hakkımızda"}
              </Nav.Link>
              <Nav.Link href="#contact" onClick={startAnimation}>
                {language === "en" ? "Contant Us" : "İletişim"}{" "}
              </Nav.Link>
              <Button
                variant="light"
                style={{ backgroundColor: "transparent", border: "none" }}
                onClick={handleLanguage}
              >
                {language === "tr" ? "🇹🇷" : "🇬🇧"}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarContainer;
