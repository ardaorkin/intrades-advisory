import React from "react";
import { useAtom } from "jotai";
import { languageChoiceWithPersistence } from "../store";
import { Col, Container, Row } from "react-bootstrap";
import envelope from "bootstrap-icons/icons/envelope.svg";
import telephone from "bootstrap-icons/icons/telephone.svg";
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
          <Col>
            <div
              className="contact-links"
              onClick={() =>
                window.open("mailto:sercanyildiz@intradesadvisory.com")
              }
            >
              <img src={envelope} width={100} height={100} />
              <p>{language === "en" ? "Mail Us" : "Email"}</p>
            </div>
          </Col>
          <Col>
            <div
              className="contact-links"
              onClick={() => window.open("tel:+905368877782")}
            >
              <img src={telephone} width={100} height={100} />
              <p>{language === "en" ? "Call Us" : "Bizi Arayın"}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
