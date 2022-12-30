import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import loginAuthReducer from "./slice/loginAuthSlice";

const reducers = combineReducers({
    [apiSlice.reducerPath] : apiSlice.reducer,
    loginAuth: loginAuthReducer
})

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)   
})