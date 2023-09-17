import { configureStore } from "@reduxjs/toolkit";
import reduxSlice from "./slice";
const store = configureStore({
    reducer: {
        reducerAction: reduxSlice,
    },
});

export default store;
