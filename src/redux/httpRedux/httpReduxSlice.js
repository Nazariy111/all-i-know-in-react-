import { createSlice } from "@reduxjs/toolkit"
import { fetchAllContacts } from "./httpReduxOperations";

const slice = createSlice({
    name: "contacts",
    initialState: {
        contacts: [],
        isLoading: false,
        isError: null,
    },
    extraReducers: (builder) => builder
        .addCase(fetchAllContacts.pending, (state, action) => {
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
})

const httpReduxReducer = slice.reducer;

export default httpReduxReducer;