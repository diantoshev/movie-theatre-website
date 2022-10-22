import GreyContainer from "../../../../components/GreyContainer/GeryContainer";
import TheaterCard from "../../../../components/TheaterCard/TheaterCard";
import "./TheatresContainer.scss";
export default function TheatresContainer() {
  return (
    <div className="theatres-container-design">
      <GreyContainer className="theatres-container">
        <TheaterCard />
      </GreyContainer>
      <GreyContainer className="theatres-container">
        <TheaterCard />
      </GreyContainer>
    </div>
  );
}
