import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isSeller: false,
	sellerId: null
};

const sellerAccessSlice = createSlice({
	name: "sellerAccess",
	initialState,
	reducers: {
		setSeller: (state, action) => {
			return { ...state, isSeller: action.payload };
		},
		setSellerId: (state, action) => {
			return { ...state, sellerId: action.payload };
		}
	}
});

export const { setSeller, setSellerId } = sellerAccessSlice.actions;

export const selectCurrentIsSeller = (state) => state.sellerAccess.isSeller;
export const selectCurrentSellerId = (state) => state.sellerAccess.sellerId;

export default sellerAccessSlice.reducer;
