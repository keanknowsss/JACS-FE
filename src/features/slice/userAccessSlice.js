import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	token: null,
	id: null,
	isVerified: false,
};

const userAccessSlice = createSlice({
	name: "userAccess",
	initialState,
	reducers: {
		setCredentials: (state, action) => {
			const { accessToken, _id, isVerified } = action.payload;
			return { ...state, token: accessToken, id: _id, isVerified };
		},
		verifyUser: (state, action) => {
			return { ...state, isVerified: action.payload };
		},
		logOut: () => {
			return initialState;
		},
	},
});

export const { setCredentials, verifyUser,  logOut } = userAccessSlice.actions;

export default userAccessSlice.reducer;

export const selectCurrentToken = (state) => state.userAccess.token;
export const selectCurrentUserId = (state) => state.userAccess.id;
export const selectCurrentUserIsVerified = (state) => state.userAccess.isVerified;
