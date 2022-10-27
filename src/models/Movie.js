export default class Movie {
  constructor(id, title, poster, genre, cast, year, plot, director, country, runtime) {
    this.id = id;
    this.title = title;
    this.poster = poster;
    this.genre = genre;
    this.cast = cast;
    this.year = year;
    this.plot = plot;
    this.director = director;
    this.country = country;
    this.runtime = runtime;
  }

  cinemaIds = ['cin1', 'cin2', 'cin3', 'cin4', 'cin5', 'cin6'];
}
