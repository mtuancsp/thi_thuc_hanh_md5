import {configureStore} from "@reduxjs/toolkit";
import {searchReducer} from "./slices/searchSlice";

const store = configureStore({
    reducer: {
    },
});

export default store;
