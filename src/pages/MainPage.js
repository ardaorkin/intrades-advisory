import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useAtom } from "jotai";
import { languageChoiceWithPersistence } from "../store";

const MainPage = ({ componentWillAnimate, startAnimation }) => {
  const [language] = useAtom(languageChoiceWithPersistence);
  return (
    <div id="home" className="page">
      <Container style={{ textAlign: "start" }}>
        <Row>
          <Col>
            <h1
              className={
                componentWillAnimate === "#home" ? "text-focus-in" : ""
              }
            >
              {language === "en" ? "We Help You" : "İşinizi Büyütmek"}
            </h1>
            <h1
              className={
                componentWillAnimate === "#home" ? "text-focus-in" : ""
              }
            >
              {language === "en" ? "To Grow Your Business" : "İster Misiniz?"}
            </h1>
          </Col>
        </Row>
        <Row>
          <Col style={{ display: "flex", flexDirection: "row" }}>
            <Button
              href="#about"
              size="lg"
              id="about-btn"
              onClick={startAnimation}
              className={
                componentWillAnimate === "#home"
                  ? "hero-btn text-focus-in"
                  : "hero-btn"
              }
            >
              {language === "en" ? "About Us" : "Hakkımızda"}
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainPage;
