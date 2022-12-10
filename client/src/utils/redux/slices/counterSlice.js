import { createSlice } from "@reduxjs/toolkit";

const initState = {
	products: [],
};

export const counterSlice = createSlice({
	name: "counter",
	initState,
	reducers: {
		UPDATE_PRODUCTS: (state, action) => {
			return {
				...state,
				products: [...action.products],
			};
		},
	},
});

export const { UPDATE_PRODUCTS } = counterSlice.reducer;
