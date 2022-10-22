import GreyContainer from "../../../../components/GreyContainer/GeryContainer";
import "./TheaterPanel.scss";
import TheaterScreenings from "../TheaterScreenings/TheaterScreening";

export default function TheaterPanel() {
  return (
    <GreyContainer className="theater-big-panel-design">
      <TheaterScreenings />
    </GreyContainer>
  );
}
