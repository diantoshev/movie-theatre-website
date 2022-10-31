import { createSlice } from '@reduxjs/toolkit';
import { programDays } from '../util/utilFuncs';
const initialState = {
    screeningId: '',
    theatreId: '',
    theatreName: '',
    movieTitle: '',
    movieId: '',
    movieImage: '',
    date: programDays()[0],
    hour: '',
    price: ''
}

export const screeningsSlice = createSlice({
    name: 'selectedScreening',
    initialState,
    reducers: {
        updateScreening: (state, action) => {
            const { screeningId, hour } = action.payload;
            state.screeningId = screeningId;
            state.hour = hour;

        },

        updateTheatre: (state, action) => {
            const { theatreName, theatreId } = action.payload;
            state.theatreName = theatreName;
            state.theatreId = theatreId;

        },

        updateDate: (state, action) => {
            const { date } = action.payload;
            state.date = date;
        },

        updateMovie: (state, action) => {
            const { movieId, screeningId, movieImage, movieTitle, price } = action.payload;
            state.screeningId = screeningId;
            state.movieTitle = movieTitle;
            state.movieId = movieId;
            state.movieImage = movieImage;
            state.price = price;
        },

    },
})

// Action creators are generated for each case reducer function
export const { updateTheatre, updateScreening, updateDate, updateMovie } = screeningsSlice.actions

export default screeningsSlice.reducer