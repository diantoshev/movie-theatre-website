import GoldContainer from "../../../../components/GoldContainer/GoldContainer";
import "./TheaterInfo.scss";

export default function TheatreInfoPanel() {
  return (
    <GoldContainer className="theatre-info-design">
      <GoldContainer className="theatre-description-design">
        Address: Lorem ipsum, dolor sit
        <br />
        Phone: 0888 88 88 88
        <br />
        Working hours: 12.00 - 22.00
        <br />
        Halls: 5
      </GoldContainer>
    </GoldContainer>
  );
}
