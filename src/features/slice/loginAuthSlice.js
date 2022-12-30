import { createSlice } from "@reduxjs/toolkit";

const initialState = { username: null, token: null, id: null, isVerified: false };

const loginAuthSlice = createSlice({
	name: "loginAuth",
	initialState,
	reducers: {
		setCredentials: (state, action) => {
			const { accessToken, _id, isVerified } = action.payload;
			return { token: accessToken, id: _id, isVerified };
		},
		logOut: () => {
			return initialState;
		},
	},
});

export const { setCredentials, logOut } = loginAuthSlice.actions;

export default loginAuthSlice.reducer;

export const selectCurrentToken = (state) => state.loginAuth.token;
export const selectCurrentUserId = (state) => state.loginAuth.id;
export const selectCurrentUserIsVerified = (state) => state.loginAuth.isVerified;
