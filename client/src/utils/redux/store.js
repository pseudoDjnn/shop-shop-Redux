import { configureStore } from "@reduxjs/toolkit";
import { storeSlice } from "./slices/storeSlice";
// import reducer from "../../utils/reducers";

const store = configureStore({
	reducer: {
		storeReducer: storeSlice,
	},
});

export default store;
