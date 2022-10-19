import GreyContainer from "../../../../components/GreyContainer/GeryContainer";
import TheaterCards from "../TheaterCard/TheaterCard";
import "./TheatresContainer.scss";
export default function TheatresContainer() {
  return (
    <div className="theatres-container-design">
      <GreyContainer>
        <TheaterCards />
      </GreyContainer>
      <GreyContainer>
        <TheaterCards />
      </GreyContainer>
    </div>
  );
}
