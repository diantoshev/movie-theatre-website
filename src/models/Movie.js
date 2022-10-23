export default class Movie {
  constructor(poster, title, genre) {
    this.poster = poster;
    this.title = title;
    this.genre = genre;
    this.theatres = [];
    this.timeSlots = [];
  }
}
