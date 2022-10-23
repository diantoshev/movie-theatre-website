export default class Screening {
  constructor(occupiedSeats, totalSeats, freeSeats, movie, hour, hall) {
    this.occupiedSeats = occupiedSeats;
    this.totalSeats = totalSeats;
    this.freeSeats = freeSeats;
    this.movie = movie;
    this.hour = hour;
    this.hall = hall;
  }
}
