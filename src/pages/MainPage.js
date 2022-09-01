import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const MainPage = () => {
  return (
    <div id="home" className="page">
      <Container style={{ textAlign: "start" }}>
        <Row>
          <Col>
            <h1>We Help You</h1>
            <h1>To Grow Your Business</h1>
          </Col>
        </Row>
        <Row style={{ width: "55%" }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            posuere iaculis ultrices. Nullam posuere imperdiet nunc, vel
            pharetra magna commodo vel.
          </p>
        </Row>
        <Row>
          <Col style={{ display: "flex", flexDirection: "row" }}>
            <Button href="#about" size="lg" id="about-btn" className="hero-btn">
              About Us
            </Button>
            <Button
              href="#products"
              size="lg"
              id="products-btn"
              className="hero-btn"
            >
              Products
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainPage;
