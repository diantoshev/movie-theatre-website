import GreyContainer from "../../../../components/GreyContainer/GeryContainer";
import GoldContainer from "../../../../components/GoldContainer/GoldContainer";
import "./TheaterPanel.scss";
import DarkButton from "../../../../components/Buttons/DarkButton";
import TheaterScreenings from "../TheaterScreenings/TheaterScreening";

export default function TheaterPanel() {
  return (
    <GreyContainer className="theater-big-panel-design">
      <TheaterScreenings />
    </GreyContainer>
  );
}
