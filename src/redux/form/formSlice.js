import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

// 2 форма асбстракции над ванильным редаксом снизу

const formInitialState = {
    name: "guest",
    email: "empty",
    way: "empty",
    status: "empty",
    selected: [],
    message: "empty",
}

// export const formInfoSlice = createAction("formInfo/addInfo");

// export const formInfoReducer = createReducer(formInitialState, (builder) => {
//     builder
//         .addCase(formInfoSlice, (state, action) => {
//             state.name = action.payload.name;
//             state.email = action.payload.email;
//             state.way = action.payload.way;
//             state.status = action.payload.status;
//             state.selected = action.payload.selected;
//             state.message = action.payload.message;
//         });
// });



// ========================================
// УЖЕ ИДЕАЛЬНЫЙ КОД...из всего что сверху пишем сразу логику слайса

export const slice = createSlice({
    name: "formInfo",
    initialState: formInitialState,
    reducers: {
        addInfo: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.way = action.payload.way;
            state.status = action.payload.status;
            state.selected = action.payload.selected;
            state.message = action.payload.message;
        },
    }
});

// console.log(slice.reducer);
// console.log(slice.actions);
// console.log(slice.actions.addInfo);
const formInfoReducer = slice.reducer;

export const addInfo = slice.actions.addInfo;

export default formInfoReducer;

