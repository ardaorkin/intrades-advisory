import Card from "react-bootstrap/Card";

function ProductCard(props = { text: "", title: "", image: "" }) {
  return (
    <Card
      style={{
        width: "18rem",
        minHeight: "10rem",
        backgroundColor: "transparent",
        border: "1px solid rgba(22, 225, 208, 0.33)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
      }}
    >
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
