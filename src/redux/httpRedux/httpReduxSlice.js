import { createSlice } from "@reduxjs/toolkit"
import { addContact, deleteContact, fetchAllContacts } from "./httpReduxOperations";
import { act } from "react-dom/test-utils";

const slice = createSlice({
    name: "contacts",
    initialState: {
        contacts: [],
        isLoading: false,
        isError: null,
    },
    extraReducers: (builder) => builder
        .addCase(fetchAllContacts.pending, (state, action) => {
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(fetchAllContacts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.contacts = action.payload;            
        })
        .addCase(fetchAllContacts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        })
        .addCase(addContact.pending, (state, action) => {
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(addContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.contacts.push(action.payload);
        })
        .addCase(addContact.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        })
        .addCase(deleteContact.pending, (state, action) => {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id);
            state.isLoading = false;
        })
        .addCase(deleteContact.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        })
})

const httpReduxReducer = slice.reducer;

export default httpReduxReducer;