import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	token: null,
	id: null,
	isVerified: false,
	hasData: false,
};

const userAccessSlice = createSlice({
	name: "userAccess",
	initialState,
	reducers: {
		setCredentials: (state, action) => {
			const { accessToken, _id, isVerified } = action.payload;
			return { ...state, token: accessToken, id: _id, isVerified };
		},
		toggleHasData: (state, action) => {
			return { ...state, hasData: action.payload };
		},
		logOut: () => {
			return initialState;
		},
	},
});

export const { setCredentials, toggleHasData, logOut } = userAccessSlice.actions;

export default userAccessSlice.reducer;

export const selectCurrentToken = (state) => state.userAccess.token;
export const selectCurrentUserId = (state) => state.userAccess.id;
export const selectCurrentUserIsVerified = (state) => state.userAccess.isVerified;
export const selectHasData = (state) => state.userAccess.hasData;
