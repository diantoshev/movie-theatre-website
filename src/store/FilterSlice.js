import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    cinemaId: '',
    genre: '',
    movieId: '',
    date: '',
    searQuery: '',
    filteredGenres: [],
    filteredTitles: [],
    filteredDates: []
}

const movieFilter = createSlice({
    name: 'movieFilter',
    initialState,
    reducers: {
        updateTheatreSelect: (state, action) => {
            state.cinemaId = action.payload;
        },
        updateGenreSelect: (state, action) => {
            state.genre = action.payload;
        },
        updateMovieSelect: (state, action) => {
            state.movieId = action.payload;
        },
        updateDateSelect: (state, action) => {
            state.date = action.payload;
        },
        clearSearchEntries: (state) => {

            state.cinemaId = '';
            state.genre = '';
            state.movieId = '';
            state.date = '';
            state.searQuery = '';
            state.filteredGenres = [];
            state.filteredTitles = [];
            state.filteredDates = []
        }
    },

})

export const {
    updateFilteredMovies,
    updateTheatreSelect,
    updateGenreSelect,
    updateMovieSelect,
    updateDateSelect,
    clearSearchEntries } = movieFilter.actions

export default movieFilter.reducer