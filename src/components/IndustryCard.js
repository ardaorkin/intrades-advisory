import Card from "react-bootstrap/Card";

function IndustryCard(props = { text: "", title: "", image: "" }) {
  return (
    <Card style={{ width: "18rem", color: "black", minHeight: "10rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default IndustryCard;
