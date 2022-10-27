import GreyContainer from "../GreyContainer/GeryContainer"
import { Form, FormControl, FormGroup } from "react-bootstrap";
import "./MovieFIlter.scss";
import { useSelector } from "react-redux";
import { theatreManager } from '../../models/TheatreManager.js';
import { movieManager } from "../../models/MovieManager";
export default function MovieFilter() {

    // Getting data from global state:
    const theatreData = useSelector(state => state.allTheatres);
    const movieData = useSelector(state => state.allMovies.data);

    // Defining dropdown options:
    const theatreNames = theatreManager.getTheatreNames(theatreData.map(theatre => JSON.parse(theatre)));
    const allGenres = movieManager.getListOfGenres(movieData.map(movie => JSON.parse(movie)));
    const movieNames = movieManager.getAllMovieNames(movieData.map(movie => JSON.parse(movie)));
    const programDays = theatreManager.nextSevenDays();

    return (
        <GreyContainer className="container-sm py-4 rounded-3 movieFilterForm__container">
            <Form className='movieFilterForm container-sm'>
                <FormGroup className="formSelects">
                    <Form.Select className="bg-goldMid">
                        <option> Choose cinema...</option>
                        {theatreNames.map(name => <option key={name}>{name}</option>)}
                    </Form.Select>
                    <Form.Select className="bg-goldMid">
                        <option> Choose genre...</option>
                        {allGenres.map(genre => <option key={genre}>{genre}</option>)}
                    </Form.Select>
                    <Form.Select className="bg-goldMid">
                        <option> Choose a movie...</option>
                        {movieNames.map(movieName => <option key={movieName}>{movieName}</option>)}
                    </Form.Select>
                    <Form.Select className="bg-goldMid">
                        <option> Choose a date...</option>
                        {programDays.map(day => <option key={day}>{day}</option>)}
                    </Form.Select>
                </FormGroup>
                <p>OR</p>
                <FormGroup>
                    <FormControl type='text' className='bg-goldMid' placeholder="Search for a movie..."></FormControl>
                </FormGroup>
            </Form>
        </GreyContainer>
    );
}