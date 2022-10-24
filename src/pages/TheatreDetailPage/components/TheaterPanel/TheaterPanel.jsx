import GreyContainer from "../../../../components/GreyContainer/GeryContainer";
import "./TheaterPanel.scss";
import TheaterScreenings from "../TheaterScreenings/TheaterScreening";

export default function TheaterPanel() {
  return (
    <GreyContainer className="p-4 container-lg">
      <TheaterScreenings />
    </GreyContainer>
  );
}
