import { createSelector, createSlice } from "@reduxjs/toolkit";
import { contactsSelector, filterWord } from "./httpReduxSelectors";

const slice = createSlice({
    name: "filterContacts",
    initialState: {
        filter: "",
    },
    reducers: {
        changeTextFilter: (state, action) => {
            state.filter = action.payload;
        }
    }

})

const filterSliceReducer = slice.reducer;

export const changeTextFilter = slice.actions.changeTextFilter;

export const filteredContacts1 = createSelector([contactsSelector, filterWord],
    (contacts, filterWord) => { 
        return contacts.filter(contact => contact.name.includes(filterWord.toLowerCase()))
    })

export default filterSliceReducer;