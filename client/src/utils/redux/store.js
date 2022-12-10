import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counterSlice";

const store = configureStore({
	reducer: {
		store: counterSlice,
	},
});

export default store;
