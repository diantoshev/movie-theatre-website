import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cinemaId: '',
    movieTitle: '',
    movieId: '',
    date: '',
    hour: '',
    occupiedSeats: [],
    hall: ''
}

export const screeningsSlice = createSlice({
    name: 'allScreenings',
    initialState,
    reducers: {
        populateScreenings: (state, action) => {
            console.log(action.payload);
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { populateScreenings } = screeningsSlice.actions

export default screeningsSlice.reducer