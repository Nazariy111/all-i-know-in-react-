import { createSlice } from "@reduxjs/toolkit"


export const welcomeModalSlice = createSlice({
    name: "welcomeModalInfo", 
    initialState: { isWelcomeModal: true },
    reducers: {
        offWelcomeModal: (state, action) => {
            state.isWelcomeModal = false;
        }


    }
})

const welcomeModalReducer = welcomeModalSlice.reducer;

export const offWelcomeModal = welcomeModalSlice.actions.offWelcomeModal;

export default welcomeModalReducer;