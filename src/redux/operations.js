import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://63a16e8da543280f775637fa.mockapi.io';

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get('/contacts');
            return data;
        }catch (error){
            return thunkAPI.rejectWithValue(error.message);
        }
       
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async({name, number}, thunkAPI) =>{
        try{
            const { data } = await axios.get('/contacts',{
                name: name,
                number: number,
            });
            return data;
        }catch (error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact  = createAsyncThunk(
    "contacts/deleteContact",
    async(id, thunkAPI) =>{
        try{
            const { data } = await axios.get(`/contacts/${id}`);
            return data;
        }catch (error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
