import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { fetchContacts, addContacts, deleteContact } from './operations';

// const initialState = {
//     // items: [
//     //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     // ],
//     items: [],
//     isLoading: false,
//     error: null
// };

// const handleFetchContacts = (state, action) => {
//     state.items = action.payload;
// }

// const handleAddContacts = (state, action) => {
//     state.items.push(action.payload);
// }

// const handleDeleteContacts = (state, action) => {
//     const idx = state.items.findIndex(({ id }) => id === action.payload.id);
//     state.splice(idx, 1);
// }

// const actions = [fetchContacts, addContact, deleteContact];


const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

export const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers: {
        //fetch
        [fetchContacts.pending]: handlePending,
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchContacts.rejected]: handleRejected,

        //add
        [addContacts.pending]: handlePending,
        [addContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },
        [addContacts.rejected]: handleRejected,

        //delete
        [deleteContact.pending]: handlePending,
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const idx = state.items.findIndex(({ id }) => id === action.payload.id);
            state.splice(idx, 1);
        },
        [deleteContact.rejected]: handleRejected,
    }

    // reducers: {
    //     createItems(state, action) {
    //         state.items = [...state.items, action.payload];
    //     },

    //     deleteItems(state, action) {
    //         state.items = state.items.filter(el => el.id !== action.payload);
    //     },
    // },
});

const persistConfig = {
    key: 'contacts',
    storage,
};

export const contactsReducer = persistReducer(persistConfig, contactSlice.reducer);

// export const { createItems, deleteItems } = contactSlice.actions;