import GreyContainer from "../../../../components/GreyContainer/GeryContainer";
import TheaterCards from "../TheaterCard/TheaterCard";
import "./TheatresContainer.scss";
export default function TheatresContainer() {
  return (
    <div className="theatres-container-design">
      <GreyContainer className="theatres-container">
        <TheaterCards />
      </GreyContainer>
      <GreyContainer className="theatres-container">
        <TheaterCards />
      </GreyContainer>
    </div>
  );
}
