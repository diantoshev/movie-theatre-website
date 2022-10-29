import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    image: '',
    id: '',
    address: '',
    contacts: '',
    screenings: []
};


export const theatreSlice = createSlice({
    name: 'theatre',
    initialState,
    reducers: {
        saveSelectedTheatre: (state, action) => {
            const { name, image, id, address, contacts, screenings } = action.payload;
            state.name = name;
            state.image = image;
            state.id = id;
            state.address = address;
            state.contacts = contacts;
            state.screenings = screenings;
        },
    }
})

// Action creators are generated for each case reducer function
export const { saveSelectedTheatre } = theatreSlice.actions

export default theatreSlice.reducer