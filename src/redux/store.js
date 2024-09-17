import { configureStore } from "@reduxjs/toolkit";
import { formikInfoReducer } from "./formik/slice";
import formInfoReducer from "./form/formSlice";

// for locale storage install redux-persist
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import welcomeModalReducer from "./welcomeModal/welcomeModalSlice";
import balanceReducer from "./balance/balanceSlice";
import httpReduxReducer from "./httpRedux/httpReduxSlice";
import filterSliceReducer from "./httpRedux/filterSlice";

const formInfoPersistConfig = {
    key: 'nameFromForm',
    storage,
    whitelist: ["name"],
}

const persistedformInfoReducer = persistReducer(formInfoPersistConfig, formInfoReducer);

const balancePersistConfig = {
    key: 'balance',
    storage,
    whitelist: ["balance"],
}

const persistedBalanceReducer = persistReducer(balancePersistConfig, balanceReducer)


const welcomeModalInfoPersistConfig = {
    key: 'isModal',
    storage,
    whitelist: ["isWelcomeModal"],
}

const persistedWelcomeModalReducer = persistReducer(welcomeModalInfoPersistConfig, welcomeModalReducer)

export const store = configureStore({
    reducer: {
        formikInfo: formikInfoReducer,
        formInfo: persistedformInfoReducer,
        welcomeModalInfo: persistedWelcomeModalReducer,
        balance: persistedBalanceReducer,
        httpReduxInfo: httpReduxReducer,
        filterContacts: filterSliceReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})

export const persistor = persistStore(store);


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


// export const store = createStore(rootReducer);


