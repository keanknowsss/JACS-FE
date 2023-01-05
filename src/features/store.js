import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { apiMiddleware } from "./api/apiMiddleware";
import userAccessReducer from "./slice/userAccessSlice";

const reducers = combineReducers({
	[apiMiddleware.reducerPath]: apiMiddleware.reducer,
	userAccess: userAccessReducer,
});

export const store = configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiMiddleware.middleware),
});
