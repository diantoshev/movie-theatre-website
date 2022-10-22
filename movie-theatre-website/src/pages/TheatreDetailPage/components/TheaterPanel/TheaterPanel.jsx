import GreyContainer from "../../../../components/GreyContainer/GeryContainer";
import GoldContainer from "../../../../components/GoldContainer/GoldContainer";
import "./TheaterPanel.scss";
import DarkButton from "../../../../components/Buttons/DarkButton";
import TheaterScreenings from "../TheaterScreenings/TheaterScreening";

export default function TheaterPanel() {
  return (
    <GreyContainer className="theater-big-panel-design">
      {/* <GoldContainer className="theater-panel-design">
        <DarkButton className="btn-hall">Hall 1</DarkButton>
        <DarkButton className="btn-hall">Hall 2</DarkButton>
        <DarkButton className="btn-hall">Hall 3</DarkButton>
        <DarkButton className="btn-hall">Hall 4</DarkButton>
        <DarkButton className="btn-hall">Hall 5</DarkButton>
      </GoldContainer> */}
      <TheaterScreenings />
    </GreyContainer>
  );
}
