import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useAtom } from "jotai";
import { contentAtom, languageChoiceWithPersistence } from "../store";

const Content = ({ header, description }) => {
  return (
    <div style={{ textAlign: "start" }}>
      <h3>{header}</h3>
      <p>{description}</p>
    </div>
  );
};

const AboutUs = ({ componentWillAnimate }) => {
  const [content] = useAtom(contentAtom);
  const [selectedLanguage] = useAtom(languageChoiceWithPersistence);
  return (
    <div id="about" className="page">
      <Container
        style={{ textAlign: "center", padding: "3rem", paddingTop: "8rem" }}
      >
        <Row>
          <Col>
            <h1
              className={
                componentWillAnimate === "#about" ? "tracking-in-expand" : ""
              }
            >
              {selectedLanguage === "en" ? "About Us" : "Hakkımızda"}
            </h1>
          </Col>
        </Row>
        <Row>
          {content[selectedLanguage] &&
            Object.keys(content[selectedLanguage]).map((itemHeader, idx) => (
              <Content
                key={idx}
                header={itemHeader.toUpperCase()}
                description={content[selectedLanguage][itemHeader]}
              />
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
