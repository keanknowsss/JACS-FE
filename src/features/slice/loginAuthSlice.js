import { createSlice } from "@reduxjs/toolkit";

const initialState = { username: null, token: null, id: null };

const loginAuthSlice = createSlice({
	name: "loginAuth",
	initialState,
	reducers: {
		setCredentials: (state, action) => {
			const { accessToken, _id } = action.payload;
			return { token: accessToken, id: _id };
		},
		logOut: () => {
			return initialState;
		},
	},
});

export const { setCredentials, logOut } = loginAuthSlice.actions;

export default loginAuthSlice.reducer;

export const selectCurrentUser = (state) => state.loginAuth.username;
export const selectCurrentToken = (state) => state.loginAuth.token;
export const selectCurrentUserId = (state) => state.loginAuth.id;
