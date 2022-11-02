import { getRandomItem } from '../util/utilFuncs';
import { v4 as uuid } from 'uuid';

export const pricing = [10, 9, 12, 15];

export default class ProgramEntry {
    constructor(
        cinemaId,
        cinemaName,
        movieTitle,
        movieId,
        movieImage,
        date,
        price = getRandomItem(pricing)
    ) {
        this.cinemaId = cinemaId;
        this.cinemaName = cinemaName;
        this.movie = movieTitle;
        this.movieId = movieId;
        this.movieImage = movieImage;
        this.date = date;
        this.price = price;
    }
    selectedHour = '';
    selectedScreeningId = '';
    selectedDate = '';
    screenings = []
    id = uuid();

}