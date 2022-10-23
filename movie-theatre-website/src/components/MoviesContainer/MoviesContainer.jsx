import MovieCard from "../MovieCard/MovieCard";
import RedContainer from '../RedContainer/RedContainer';
import './MoviesContainer.scss';

export default function MoviesContainer(props) {
    return (
        <RedContainer className="movies__containter container-xxl my-3 p-5 d-flex gap-5 flex-wrap justify-content-evenly">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </RedContainer>
    );
}