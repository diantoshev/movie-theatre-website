import { createSlice } from '@reduxjs/toolkit';
import { programDays } from '../util/utilFuncs';

const initialState = {
    name: '',
    image: '',
    id: '',
    address: '',
    contacts: '',
    currentDate: programDays()[0],
    programDates: []
};


export const theatreSlice = createSlice({
    name: 'theatre',
    initialState,
    reducers: {
        saveSelectedTheatre: (state, action) => {
            const { name, image, id, address, contacts, programDates } = action.payload;
            state.name = name;
            state.image = image;
            state.id = id;
            state.address = address;
            state.contacts = contacts;
            state.programDates = programDates;
        },

        updateCurrentDate: (state, action) => {
            state.currentDate = action.payload;
        }
    }
})

export const { saveSelectedTheatre, updateCurrentDate } = theatreSlice.actions

export default theatreSlice.reducer