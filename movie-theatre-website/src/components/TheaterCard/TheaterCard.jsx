import Card from "react-bootstrap/Card";
import "./TheaterCard.scss";
export default function TheaterCard(props) {
  const classes = props.className
    ? "card-design " + props.className
    : "card-design";
  return (
    <Card className={classes}>
      <Card.Img variant="top" src={require("./assets/cinema3.jpg")} />
      <Card.Body>
        <Card.Title>Moviespot</Card.Title>
        <Card.Text>
          Address: Lorem, ipsum dolor sit amet consectetur.
          <br />
          Telephone: 0888 88 88 88
          <br />
          Working hours: 08.00 - 22.00
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
