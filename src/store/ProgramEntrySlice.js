import { createSlice, current } from '@reduxjs/toolkit';

const initialState = []

export const programEntriesSlice = createSlice({
    name: 'programEntries',
    initialState,
    reducers: {
        updateProgramEntries: (state, action) => {
            const entries = action.payload;
            entries.forEach(entry => {
                state.push(entry);
            })
        },

        updateEntryData: (state, action) => {
            const updatedItem = action.payload;
            state = [...JSON.parse(JSON.stringify(state.filter(item => item.id !== updatedItem.id))), updatedItem]

        }

    },
})

// Action creators are generated for each case reducer function
export const { updateProgramEntries, updateEntryData } = programEntriesSlice.actions

export default programEntriesSlice.reducer