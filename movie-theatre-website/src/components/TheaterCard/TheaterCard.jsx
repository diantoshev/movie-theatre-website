import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./TheaterCard.scss";
export default function TheaterCard() {
  return (
    <CardGroup className="cards-group-design">
      <Card className="card-design">
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
      <Card className="card-design">
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
      <Card className="card-design">
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
    </CardGroup>
  );
}
