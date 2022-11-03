import { MOVIES_DATA } from '../server/AllMovies';
class MovieManager {
  constructor() {
    this.favoritesMovies = [];
  }

  allMovies = JSON.parse(MOVIES_DATA);
  // Gets an array of all movies from the store and returns
  // a new set of only the genres for each movie in the list:
  getListOfGenres(movies) {
    const allGenres = (movies.map(item => item.Genre.split(',')).flat())
      .map(item => item.trim());

    return Array.from(new Set(allGenres));
  }

  getAllMovieNames(movies) {
    return movies.map(movie => {
      return { name: movie.Title, id: movie.imdbID }
    });
  }

  getRandomMovies(number) {
    const result = [];

    do {
      const currentItem = this.allMovies[Math.floor(Math.random() * this.allMovies.length)];

      const isItemPresent = result.find(item => item.Title === currentItem.Title)
      if (!isItemPresent) {
        result.push(currentItem);
      }

    } while (result.length < number);

    return result;

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
