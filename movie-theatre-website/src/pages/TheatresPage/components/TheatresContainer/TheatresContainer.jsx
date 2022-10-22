import GreyContainer from "../../../../components/GreyContainer/GeryContainer";
import TheaterCard from "../../../../components/TheaterCard/TheaterCard";
import "./TheatresContainer.scss";
import CardGroup from "react-bootstrap/CardGroup";
export default function TheatresContainer() {
  return (
    <div className="theatres-container-design">
      <GreyContainer className="theatres-container">
        <CardGroup className="cards-group-design">
          <TheaterCard />
          <TheaterCard />
          <TheaterCard />
        </CardGroup>
      </GreyContainer>
      <GreyContainer className="theatres-container">
        <CardGroup className="cards-group-design">
          <TheaterCard />
          <TheaterCard />
          <TheaterCard />
        </CardGroup>
      </GreyContainer>
    </div>
  );
}
