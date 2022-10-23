import RedContainer from "../../../../components/RedContainer/RedContainer";
import "./TheaterScreening.scss";
import GoldButton from "../../../../components/Buttons/GoldButton";
import DarkButton from "../../../../components/Buttons/DarkButton";

export default function TheaterScreenings() {
  return (
    <div>
      <RedContainer className="movie-container">
        <img src={require("./assets/poster1.jpg")} alt="poster" />
        <span className="movie-title">The Front Line</span>
        <GoldButton className="btn-screening">13.00</GoldButton>
        <GoldButton className="btn-screening">15.00</GoldButton>
        <GoldButton className="btn-screening">17.00</GoldButton>
        <GoldButton className="btn-screening">19.00</GoldButton>
        <GoldButton className="btn-screening">21.00</GoldButton>
        <DarkButton className="btn-buy">Buy Tickets</DarkButton>
      </RedContainer>
      <RedContainer className="movie-container">
        <img src={require("./assets/poster1.jpg")} alt="poster" />
        <span className="movie-title">The Front Line</span>
        <GoldButton className="btn-screening">13.00</GoldButton>
        <GoldButton className="btn-screening">15.00</GoldButton>
        <GoldButton className="btn-screening">17.00</GoldButton>
        <GoldButton className="btn-screening">19.00</GoldButton>
        <GoldButton className="btn-screening">21.00</GoldButton>
        <DarkButton className="btn-buy">Buy Tickets</DarkButton>
      </RedContainer>
      <RedContainer className="movie-container">
        <img src={require("./assets/poster1.jpg")} alt="poster" />
        <span className="movie-title">The Front Line</span>
        <GoldButton className="btn-screening">13.00</GoldButton>
        <GoldButton className="btn-screening">15.00</GoldButton>
        <GoldButton className="btn-screening">17.00</GoldButton>
        <GoldButton className="btn-screening">19.00</GoldButton>
        <GoldButton className="btn-screening">21.00</GoldButton>
        <DarkButton className="btn-buy">Buy Tickets</DarkButton>
      </RedContainer>
      <RedContainer className="movie-container">
        <img src={require("./assets/poster1.jpg")} alt="poster" />
        <span className="movie-title">The Front Line</span>
        <GoldButton className="btn-screening">13.00</GoldButton>
        <GoldButton className="btn-screening">15.00</GoldButton>
        <GoldButton className="btn-screening">17.00</GoldButton>
        <GoldButton className="btn-screening">19.00</GoldButton>
        <GoldButton className="btn-screening">21.00</GoldButton>
        <DarkButton className="btn-buy">Buy Tickets</DarkButton>
      </RedContainer>
    </div>
  );
}
