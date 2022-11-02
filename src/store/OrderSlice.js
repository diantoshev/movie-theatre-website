import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
    seats: [],
    total: 0,
    programId: ''
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        updatePriceTotal: (state, action) => {
            state.total = action.payload;
        },

        updateSeats: (state, action) => {
            const currentSeat = action.payload;
            if (!state.seats.includes(currentSeat)) {
                state.seats = [...state.seats, currentSeat]

            }
            else {
                state.seats = [...state.seats.filter(seat => seat !== currentSeat)]
            }
        },
        clearOrder: (state) => {
            state.seats = [];
            state.total = 0;
            state.programId = '';
        },

        updateSelectedProgramEntry: (state, action) => {
            state.programId = action.payload;
        }

    },
})

// Action creators are generated for each case reducer function
export const { updatePriceTotal, updateSeats, clearOrder, updateSelectedProgramEntry } = orderSlice.actions

export default orderSlice.reducer