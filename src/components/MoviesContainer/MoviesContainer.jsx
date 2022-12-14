import MovieCard from "../MovieCard/MovieCard";
import RedContainer from '../RedContainer/RedContainer';
import './MoviesContainer.scss';
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearSearchEntries } from '../../store/FilterSlice';
import { debounce } from '../../util/utilFuncs';
export default function MoviesContainer(props) {

    // Filter processing:
    const program = useSelector(state => state.programEntries);
    const allMovies = useSelector(state => state.allMovies.data);
    const filter = useSelector(state => state.movieFilter);
    let searchQuery = filter.searchQuery;
    let theatreSelect = filter.cinemaId;
    let genreSelect = filter.genre;
    let movieSelect = filter.movieId;
    let dateSelect = filter.date;
    const isThereSearchEntry = theatreSelect || genreSelect || movieSelect || dateSelect || searchQuery;

    const filterMovies = function () {
        const programEntries = program.filter(programEntry => programEntry.cinemaId === theatreSelect);
        const filteredMovieIds = Array.from(new Set(programEntries.map(entry => entry.movieId)));
        let result = [];
        if (searchQuery === '') {
            if (theatreSelect !== '') {
                result = allMovies.filter(movie => filteredMovieIds.includes(movie.id));

            }

            if (genreSelect !== '') {
                result = allMovies.filter(movie => filteredMovieIds.includes(movie.id)
                    && movie.genre.toLowerCase().includes(genreSelect));
            }

            if (movieSelect !== '') {
                result = allMovies.filter(movie => filteredMovieIds.includes(movie.id)
                    && movie.genre.toLowerCase().includes(genreSelect)
                    && movie.id === movieSelect);
            }
            if (dateSelect !== '') {
                const availableDays = programEntries.filter(entry => entry.movieId === movieSelect)
                    .map(entry => entry.date);
                result = allMovies.filter(movie => filteredMovieIds.includes(movie.id)
                    && movie.genre.toLowerCase().includes(genreSelect)
                    && movie.id === movieSelect
                    && availableDays.includes(dateSelect));
            }
        }
        else {
            result = allMovies.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()));
        }
        return result;
    }

    let filteredMovies = filterMovies();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(clearSearchEntries());
    }, [])
    return (
        <RedContainer className="movies__containter container-xxl my-3 p-5 d-flex gap-5 flex-wrap justify-content-evenly">
            {filteredMovies.length !== 0 ?
                filteredMovies.map(movie => {
                    return <MovieCard
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        country={movie.country}
                        year={movie.year}
                        poster={movie.poster}
                    />
                }) : isThereSearchEntry ?
                    <h2 className='heading-2'> Sorry, we couldn't find what you are looking for...</h2> :
                    allMovies.map(movie => {
                        return <MovieCard
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            country={movie.country}
                            year={movie.year}
                            poster={movie.poster}
                        />
                    })}
        </RedContainer>
    );
}