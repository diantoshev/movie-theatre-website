import { v4 as uuid } from 'uuid';
import { getRandomNumber, getRandomSubSetFromArr, getRandomItem } from '../util/utilFuncs';

export const hours = ['13:00', '15:00', '17:00', '19:00', '21:00'];
export const pricing = [10, 9, 12, 15];

export class Screening {
  constructor(
    cinemaId,
    movieTitle,
    movieId,
    movieImage,
    date,
    hour = hours,
    occupiedSeats = getRandomSubSetFromArr(13, 64),
    hall = getRandomNumber(5),
    price = getRandomItem(pricing)
  ) {
    this.cinemaId = cinemaId;
    this.movie = movieTitle;
    this.movieId = movieId;
    this.movieImage = movieImage;
    this.date = date;
    this.hour = hour;
    this.occupiedSeats = occupiedSeats;
    this.hall = hall;
    this.price = price;
  }

  id = uuid();
}

