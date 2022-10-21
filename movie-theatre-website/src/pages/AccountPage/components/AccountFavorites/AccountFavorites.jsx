import MovieCard from "../../../../components/MovieCard/MovieCard";
import RedContainer from "../../../../components/RedContainer/RedContainer";
import "./AccountFavorites.scss";

export default function AccountFavorites() {
  return (
    <RedContainer className="account-favorites">
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </RedContainer>
  );
}
