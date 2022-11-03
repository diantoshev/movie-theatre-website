import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    cinemaId: '',
    genre: '',
    movieId: '',
    date: '',
    searchQuery: '',
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
            state.searchQuery = '';
            state.filteredGenres = [];
            state.filteredTitles = [];
            state.filteredDates = []
        },
        updateFilteredGenres: (state, action) => {
            state.filteredGenres = [...action.payload]
        },
        updateFilteredTitles: (state, action) => {
            state.filteredTitles = [...action.payload]
        },
        updateFilteredDates: (state, action) => {
            state.filteredDates = [...action.payload]
        },
        updateSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        }
    },

})

export const {
    updateSearchQuery,
    clearSearchEntry,
    updateFilteredMovies,
    updateTheatreSelect,
    updateGenreSelect,
    updateMovieSelect,
    updateDateSelect,
    clearSearchEntries,
    updateFilteredGenres,
    updateFilteredTitles,
    updateFilteredDates } = movieFilter.actions

export default movieFilter.reducer