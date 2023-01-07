import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { apiMiddleware } from "./api/apiMiddleware";
import userAccessReducer from "./slice/userAccessSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const userAccessPersistConfig = {
	key: "root",
	storage,
};

const reducers = combineReducers({
	[apiMiddleware.reducerPath]: apiMiddleware.reducer,
	userAccess: persistReducer(userAccessPersistConfig, userAccessReducer),
});

// const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(apiMiddleware.middleware).concat(thunk),
});

export const persistor = persistStore(store);
