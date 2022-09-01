import React from "react";
import ProductCard from "../components/ProductCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const products = [
  {
    title: "Textile Products",
    text: "",
    image: "",
  },
  {
    title: "Food Product",
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
    title: "Medical Product",
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
const Products = () => {
  return (
    <div id="products" className="page">
      Products
      <Row
        xs={1}
        md={3}
        className="g-5"
        style={{ marginTop: 10, marginBottom: "5%" }}
      >
        {products.map((product) => (
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ProductCard {...product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;
