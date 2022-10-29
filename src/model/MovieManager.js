import { MOVIES_DATA } from '../server/AllMovies';
class MovieManager {
  constructor() {
    this.favoritesMovies = [];
  }

  allMovies = JSON.parse(MOVIES_DATA);

  // Gets an array of all movies from the store and returns
  // a new set of only the genres for each movie in the list:
  getListOfGenres(movies) {
    const allGenres = (movies.map(item => item.genre.split(',')).flat())
      .map(item => item.trim());

    return Array.from(new Set(allGenres));
  }

  getAllMovieNames(movies) {
    return movies.map(movie => movie.title);
  }

  getAllMovieIds(movies) {
    return movies.map(movie => movie.id);
  }

  addToFavorites() { }
  removeFromFavorites() { }
  filterTheatres() { }
  filterGenre() { }
  filterMovies() { }
  filterDate() { }
  searchName() { }
}

export const movieManager = new MovieManager();
