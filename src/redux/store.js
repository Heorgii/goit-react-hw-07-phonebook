import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from 'redux-persist';
import { contactsReducer } from "./contactSlice";
import filterSlice from "./filterSlice";

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterSlice,
    },
});

export const persistor = persistStore(store);