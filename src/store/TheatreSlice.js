import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    image: '',
    id: '',
    address: '',
    contacts: '',
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
    }
})

export const { saveSelectedTheatre } = theatreSlice.actions

export default theatreSlice.reducer