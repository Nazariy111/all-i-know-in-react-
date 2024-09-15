import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "balance",
    initialState: { balance: 1000 },
    reducers: {
        addMoney: (state, action) => {
            state.balance += Number(action.payload);
        },
        minusMoney: (state, action) => {
            state.balance -= Number(action.payload);
        },
    }
})

export const addMoney = slice.actions.addMoney;
export const minusMoney = slice.actions.minusMoney;

const balanceReducer = slice.reducer; 

export default balanceReducer;