import GoldContainer from "../../../../components/GoldContainer/GoldContainer";
import GreyContainer from "../../../../components/GreyContainer/GeryContainer";
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { BiMoviePlay } from 'react-icons/bi';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

import './MovieDetailPanel.scss';

function MovieDetailPanel() {
    // Getting URL location and extracting the movieID:
    const location = useLocation();
    const pathNameArr = location.pathname.split('/');
    const currentMovieId = pathNameArr[pathNameArr.length - 1];
    const movieData = useSelector(state => state.allMovies.data);
    const currentMovie = movieData.find(movie => currentMovieId === movie.id);
    const navigate = useNavigate();
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
                            <Button
                                className='buyTickets me-4 btn rounded-3 text-lg-center'
                                size='lg'
                                variant="outline-goldMid"
                                onClick={() => navigate('/theatres/cin1')}><BiMoviePlay /> Check program</Button>
                        </div>
                    </div>
                </GreyContainer> : <div>Loading title...</div>}
        </GoldContainer>
    );
}

export default MovieDetailPanel;