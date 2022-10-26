import GoldContainer from "../../../../components/GoldContainer/GoldContainer";
import GreyContainer from "../../../../components/GreyContainer/GeryContainer";
import SelectScreeningForm from "../SelectScreeningForm/SelectScreeningForm";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchMovies } from '../../../../store/MovieDataSlice';
import './MovieDetailPanel.scss';

function MovieDetailPanel() {
    // Getting URL location and extracting the movieID:
    const location = useLocation();
    const pathNameArr = location.pathname.split('/');
    const currentMovieId = pathNameArr[pathNameArr.length - 1];
    const movieData = useSelector(state => state.allMovies.data);
    const currentMovie = movieData.map(entry => JSON.parse(entry)).find(movie => currentMovieId === movie.id);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMovies())
    })

    return (
        <GoldContainer className='container-xxl py-3 px-5 rounded-2 mb-3'>
            {currentMovie ?
                <GreyContainer className='detailMovie__container my-3'>
                    <div className="container row d-flex flex-wrap moviedetail__container p-4">
                        <div className="d-flex gap-1 flex-column justify-content-center align-items-center titlePoster__container col">
                            <h2 className="h-2">{currentMovie.title}</h2>
                            <img src={currentMovie.poster} alt={currentMovie.title}></img>
                        </div>
                        <div className="movieContent col-md-6 pt-5 text-goldPrimary">
                            <p><strong>Year: </strong>{currentMovie.year}</p>
                            <p><strong>Country: </strong>{currentMovie.country}</p>
                            <p><strong>Genre: </strong>{currentMovie.genre}</p>
                            <p><strong>Director: </strong> {currentMovie.director}</p>
                            <p><strong>Cast: </strong> {currentMovie.cast}</p>
                            <p className="hideOnMobile"><strong>Synposis: </strong>{currentMovie.plot}</p>
                        </div>
                        <SelectScreeningForm />
                    </div>
                </GreyContainer> : <div>Loading title...</div>}
        </GoldContainer>
    );
}

export default MovieDetailPanel;