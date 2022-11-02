import { v4 as uuid } from 'uuid';

export default class Order {
  constructor(user, theater, movieId, date, hour, total, seats) {
    this.user = user;
    this.theater = theater;
    this.movieId = movieId;
    this.date = date;
    this.hour = hour;
    this.total = total;
    this.seats = seats;
  }
  id = uuid();
}
