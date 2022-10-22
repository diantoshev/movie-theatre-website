import "./AllTheatresContainer.scss";
import RedContainer from "../../../../components/RedContainer/RedContainer";
import TheaterCard from "../../../../components/TheaterCard/TheaterCard";
import GoldButton from "../../../../components/Buttons/GoldButton";

export default function AllTheatresContainer() {
  return (
    <RedContainer className="all-theatres-container-design">
      <div>
        <TheaterCard className="theater-card-design"></TheaterCard>
        <GoldButton>Edit</GoldButton>
        <GoldButton>Remove</GoldButton>
      </div>
      <div>
        <TheaterCard className="theater-card-design"></TheaterCard>
        <GoldButton>Edit</GoldButton>
        <GoldButton>Remove</GoldButton>
      </div>
      <div>
        <TheaterCard className="theater-card-design"></TheaterCard>
        <GoldButton>Edit</GoldButton>
        <GoldButton>Remove</GoldButton>
      </div>
      <div>
        <TheaterCard className="theater-card-design"></TheaterCard>
        <GoldButton>Edit</GoldButton>
        <GoldButton>Remove</GoldButton>
      </div>
      <div>
        <TheaterCard className="theater-card-design"></TheaterCard>
        <GoldButton>Edit</GoldButton>
        <GoldButton>Remove</GoldButton>
      </div>
      <div>
        <TheaterCard className="theater-card-design"></TheaterCard>
        <GoldButton>Edit</GoldButton>
        <GoldButton>Remove</GoldButton>
      </div>
    </RedContainer>
  );
}
