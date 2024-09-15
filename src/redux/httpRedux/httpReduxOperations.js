import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://663b7261fee6744a6ea1abbb.mockapi.io/contacts';

export const fetchAllContacts = createAsyncThunk('fetchAllTasks', async (_, thunkAPI) => {
    try {
        const response = await axios.get();
        return response.data;
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
    
})

export const addContact = createAsyncThunk('addContact',async (contact, thunkAPI) => {
    try {
        const response = axios.put(contact);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})
