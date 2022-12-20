import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterInput: '',
};
export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filterItems(state, action) {
            state.filterInput = action.payload;
        },
    },
});

export const { filterItems } = filterSlice.actions;
export default filterSlice.reducer;
