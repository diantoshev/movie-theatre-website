import MovieCard from "../MovieCard/MovieCard";
import RedContainer from '../RedContainer/RedContainer';
import './MoviesContainer.scss';
import { useDispatch } from "react-redux";
import { fetchMovies } from "../../store/MovieDataSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function MoviesContainer(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMovies());
    });

    const allMovies = useSelector(state => state.allMovies.data);
    return (
        <RedContainer className="movies__containter container-xxl my-3 p-5 d-flex gap-5 flex-wrap justify-content-evenly">
            {allMovies.map(item => {
                const movie = JSON.parse(item);
                return <MovieCard
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    country={movie.country}
                    year={movie.year}
                    poster={movie.poster}
                />
            })
            }
        </RedContainer>
    );
}