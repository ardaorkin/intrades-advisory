import React from "react";
import IndustryCard from "../components/IndustryCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const industries = [
  {
    title: "Textile Products",
    text: "",
    image: "",
  },
  {
    title: "Food Industry",
    text: "",
  },
  {
    title: "Machinery",
    text: "",
  },
  {
    title: "Construction & Building",
    text: "",
  },
  {
    title: "Furniture",
    text: "",
  },
  {
    title: "Medical Industry",
    text: "",
  },
  {
    title: "Plastic & Rubber",
    text: "",
  },
  {
    title: "Cosmetics",
    text: "",
  },
  {
    title: "Kitchenware",
    text: "",
  },
];
const Industries = () => {
  return (
    <div id="industries" className="page">
      Industries
      <Row
        xs={1}
        md={3}
        className="g-5"
        style={{ marginTop: 10, marginBottom: "5%" }}
      >
        {industries.map((industry) => (
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IndustryCard {...industry} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Industries;
