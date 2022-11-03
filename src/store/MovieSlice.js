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
            .then(transformed => JSON.parse(JSON.stringify(transformed)))
    }
)

const allMovies = createSlice({
    name: 'allMovies',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    }
})

export default allMovies.reducer