import GreyContainer from "../GreyContainer/GeryContainer"
import { Form, FormControl, FormGroup } from "react-bootstrap";
import "./MovieFIlter.scss";
import { useSelector } from "react-redux";
import { theatreManager } from '../../model/TheatreManager.js';
import { movieManager } from "../../model/MovieManager";
import { programDays } from '../../util/utilFuncs';
import { useDispatch } from "react-redux";
import { updateTheatreSelect, updateSearchQuery, updateFilteredDates, updateFilteredTitles, updateGenreSelect, updateMovieSelect, updateDateSelect, updateFilteredGenres, clearSearchEntries } from "../../store/FilterSlice";
import { useState } from "react";

export default function MovieFilter() {

    // Defining initial dropdown options:
    const [theatreSelect, setTheatreSelect] = useState('');

    const [genreSelect, setGenreSelect] = useState('');
    const [genreDisabled, setGenreDisabled] = useState(true);
    const [genreSelectClass, setGenreSelectClass] = useState('bg-greyLight');

    const [movieSelect, setMovieSelect] = useState('');
    const [movieSelectDisabled, setMovieSelectDisabled] = useState(true);
    const [movieSelectClass, setMovieSelectClass] = useState('bg-greyLight');

    const [dateSelect, setdateSelect] = useState('');
    const [dateSelectDisabled, setdateSelectDisabled] = useState(true);
    const [dateSelectClass, setdateSelectClass] = useState('bg-greyLight');

    // Filtering program for current date:
    const theatreNameList = theatreManager.getTheatreNames(theatreManager.allTheatres);
    const movieGenres = movieManager.getListOfGenres(movieManager.allMovies);
    const movieTitles = movieManager.getAllMovieNames(movieManager.allMovies);
    const program = useSelector(state => state.programEntries);
    const allMovies = useSelector(state => state.allMovies.data);
    const programEntries = program.filter(programEntry => programEntry.cinemaId === theatreSelect);
    const filteredMovieIds = Array.from(new Set(programEntries.map(entry => entry.movieId)));
    const dispatch = useDispatch();

    // Controlled select options for genres dropdown on selecting theatre:
    const filteredGenres = Array.from(new Set(allMovies
        .filter(movie => filteredMovieIds.includes(movie.id))
        .map(movie => movie.genre.split(','))
        .flat()
        .map(item => item.trim())))
    dispatch(updateFilteredGenres(JSON.parse(JSON.stringify(filteredGenres))))

    // Controlled select options for available titles on selecting theatre and genre:
    const filteredTitles = allMovies
        .filter(movie => filteredMovieIds.includes(movie.id) && movie.genre.toLowerCase().includes(genreSelect))
        .map(movie => {
            return { id: movie.id, name: movie.title }
        })
    dispatch(updateFilteredTitles(filteredTitles))

    // Controlled select options for available dates on previously selected criteria:
    const filteredDates = programEntries
        .filter(entry => entry.movieId === movieSelect)
        .map(entry => entry.date);
    dispatch(updateFilteredDates(filteredDates));

    const handleTheatreSelect = (e) => {
        setTheatreSelect(e.target.value);
        dispatch(updateTheatreSelect(e.target.value));
        if (e.target.value !== '') {
            setGenreSelectClass('bg-goldMid');
            setGenreDisabled(false);
        } else {
            dispatch(updateGenreSelect(''))
            setGenreSelectClass('bg-secondary');
            setGenreDisabled(true);
            setGenreSelect('');
            dispatch(updateMovieSelect(''));
            setMovieSelectClass('bg-secondary');
            setMovieSelectDisabled(true);
            setMovieSelect('');
            dispatch(updateDateSelect(''));
            setdateSelectClass('bg-secondary');
            setdateSelectDisabled(true);
            setdateSelect('');
        }
    }

    const handleGenreSelect = (e) => {
        setGenreSelect(e.target.value)
        dispatch(updateGenreSelect(e.target.value))
        if (e.target.value !== '') {
            setMovieSelectClass('bg-goldMid');
            setMovieSelectDisabled(false);
        } else {
            dispatch(updateMovieSelect(''))
            setMovieSelectClass('bg-secondary');
            setMovieSelectDisabled(true);
            setMovieSelect('');
            dispatch(updateDateSelect(''));
            setdateSelectClass('bg-secondary');
            setdateSelectDisabled(true);
            setdateSelect('');
        }
    }

    const handleMovieSelect = (e) => {
        setMovieSelect(e.target.value)
        dispatch(updateMovieSelect(e.target.value))
        if (e.target.value !== '') {
            setdateSelectClass('bg-goldMid');
            setdateSelectDisabled(false);
        } else {
            dispatch(updateDateSelect(''));
            setdateSelectClass('bg-secondary');
            setdateSelectDisabled(true);
            setdateSelect('');
        }
    }

    const handleDateSelect = (e) => {
        setdateSelect(e.target.value);
        dispatch(updateDateSelect(e.target.value))
    }

    const handleSearch = (e) => {
        if (e.target.value !== '') {
            dispatch(clearSearchEntries());
            dispatch(updateSearchQuery(e.target.value));
            setTheatreSelect('');
            dispatch(updateGenreSelect(''))
            setGenreSelectClass('bg-secondary');
            setGenreDisabled(true);
            setGenreSelect('');
            dispatch(updateMovieSelect(''));
            setMovieSelectClass('bg-secondary');
            setMovieSelectDisabled(true);
            setMovieSelect('');
            dispatch(updateDateSelect(''));
            setdateSelectClass('bg-secondary');
            setdateSelectDisabled(true);
            setdateSelect('');
        } else {
            dispatch(clearSearchEntries());
        }
    }

    return (
        <GreyContainer className="container-xxl py-4 rounded-3 movieFilterForm__container">
            <Form className='movieFilterForm container-sm'>
                <FormGroup className="formSelects">
                    <Form.Select className="bg-goldMid" value={theatreSelect} onChange={(e) => handleTheatreSelect(e)}>
                        <option value=''> Choose cinema...</option>
                        {theatreNameList.map(entry => <option value={entry.id} key={entry.id}>{entry.name}</option>)}
                    </Form.Select>
                    <Form.Select disabled={genreDisabled} className={genreSelectClass} value={genreSelect} onChange={(e) => handleGenreSelect(e)}>
                        <option value=''> Choose genre...</option>
                        {filteredGenres.length !== 0 ? filteredGenres.map(genre => <option value={genre.toLowerCase()} key={genre.toLowerCase()}>{genre}</option>) :
                            movieGenres.map(genre => <option value={genre.toLowerCase()} key={genre.toLowerCase()}>{genre}</option>)}
                    </Form.Select>
                    <Form.Select disabled={movieSelectDisabled} className={movieSelectClass} value={movieSelect} onChange={(e) => handleMovieSelect(e)}>
                        <option value=''> Choose a movie...</option>
                        {filteredTitles.length !== 0 ?
                            filteredTitles.map(title => <option value={title.id} key={title.id}>{title.name}</option>) :
                            movieTitles.map(title => <option value={title.id} key={title.id}>{title.name}</option>)}
                    </Form.Select>
                    <Form.Select disabled={dateSelectDisabled} className={dateSelectClass} value={dateSelect} onChange={(e) => handleDateSelect(e)}>
                        <option value=''> Choose a date...</option>
                        {filteredDates.length !== 0 ?
                            filteredDates.map(day => <option key={day}>{day}</option>) :
                            programDays().map(day => <option key={day}>{day}</option>)}
                    </Form.Select>
                </FormGroup>
                <p>OR</p>
                <FormGroup>
                    <FormControl type='text' onChange={(e) => handleSearch(e)} className='bg-goldMid' placeholder="Search for a movie..."></FormControl>
                </FormGroup>
            </Form>
        </GreyContainer>
    );
}