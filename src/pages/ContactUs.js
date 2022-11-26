import React from "react";
import { useAtom } from "jotai";
import { languageChoiceWithPersistence } from "../store";
import { Col, Container, Row } from "react-bootstrap";
const ContactUs = () => {
  const [language] = useAtom(languageChoiceWithPersistence);
  return (
    <div id="contact" className="page">
      <Container
        style={{ textAlign: "center", padding: "3rem", paddingTop: "8rem" }}
      >
        <Row>
          <Col>
            <h1>{language === "en" ? "Contact Us" : "İletişim"}</h1>
          </Col>
        </Row>
        <Row>
          <a href="mailto:sercanyildiz@intradesadvisory.com" target={"_blank"}>
            Mail Us
          </a>
          Or
          <a href="tel:+905368877782" target={"_blank"}>
            Call Us
          </a>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
