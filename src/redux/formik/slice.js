// VANILLA REDUX.... not vanilla - forms

export const newName = (name) => {
    return {
        type: "formikInfo/newName",
        payload: name,
    }
}

const initialState = {
    formikInfo: {
        name: "guest",
        email: "",
        message: "",
        level: "",
        color: "",
    }
    
};

// if we have a few reducers

// const formikInfoReducer = (state = {
//     name: "guest",
//     email: "",
//     message: "",
//     level: "",
//     color: "",
// }, action) => {
//     here logic
//     }

// const rootReducer = combineReducers({
//     formikInfo: formikInfoReducer,
//     formInfo: formInfoReducer
// })

export const formikInfoReducer = (state = {
        name: "guest",
        email: "",
        message: "",
        level: "",
        color: "",
    }, action) => {
    switch (action.type) {
        case "formikInfo/newName":
            return {
                    ...state,
                    name: action.payload
                }
            
        default:
            return state;
    }
    
};