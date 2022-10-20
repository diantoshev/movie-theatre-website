import MovieCard from "../MovieCard/MovieCard";
import GoldContainer from "../GoldContainer/GoldContainer";

export default function MoviesContainer() {
    return (
        <GoldContainer className="my-3 p-5">
            <MovieCard></MovieCard>
        </GoldContainer>
    );
}