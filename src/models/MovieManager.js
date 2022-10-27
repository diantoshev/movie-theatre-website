class MovieManager {
  constructor() {
    this.favoritesMovies = [];
  }

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

  addToFavorites() { }
  removeFromFavorites() { }
  filterTheatres() { }
  filterGenre() { }
  filterMovies() { }
  filterDate() { }
  searchName() { }
}

export const movieManager = new MovieManager();
