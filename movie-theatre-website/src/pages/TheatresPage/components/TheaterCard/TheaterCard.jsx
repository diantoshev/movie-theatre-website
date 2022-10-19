import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./TheaterCard.scss";
export default function TheaterCards() {
  return (
    <CardGroup className="cards-group-design">
      <Card>
        <Card.Img
          className="cards-design"
          variant="top"
          src={require("./assets/cinema3.jpg")}
        />
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
      <Card>
        <Card.Img
          className="cards-design"
          variant="top"
          src={require("./assets/cinema3.jpg")}
        />
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
      <Card>
        <Card.Img
          className="cards-design"
          variant="top"
          src={require("./assets/cinema3.jpg")}
        />
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
