import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MOVIES_DATA } from '../server/AllMovies';
import Movie from '../model/Movie';

const initialState = {
    data: [],
};

export const fetchMovies = createAsyncThunk(
    'program/fetch',
    () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(MOVIES_DATA);
            }, 500)
        })
            .then(data => JSON.parse(data).map(entry => {
                return new Movie(
                    entry.imdbID,
                    entry.Title,
                    entry.Poster,
                    entry.Genre,
                    entry.Actors,
                    entry.Year,
                    entry.Plot,
                    entry.Director,
                    entry.Country,
                    entry.Runtime
                )
            }))
            .then(transformed => transformed.map(item => JSON.stringify(item)))
    }
)

const allMovies = createSlice({
    name: 'allMovies',
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
    extraReducers: (builder) => {
        // // When our request is pending:
        // // - store the 'pending' state as the status for the corresponding pokemon name
        // builder.addCase(fetchPokemonByName.pending, (state, action) => {
        //   state.statusByName[action.meta.arg] = 'pending'
        // })
        // When our request is fulfilled:
        // - store the 'fulfilled' state as the status for the corresponding pokemon name
        // - and store the received payload as the data for the corresponding pokemon name
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.data = action.payload;
        })
        // // When our request is rejected:
        // // - store the 'rejected' state as the status for the corresponding pokemon name
        // builder.addCase(fetchPokemonByName.rejected, (state, action) => {
        //   state.statusByName[action.meta.arg] = 'rejected'
        // })
    }
})

// Action creators are generated for each case reducer function
export const { } = allMovies.actions

export default allMovies.reducer