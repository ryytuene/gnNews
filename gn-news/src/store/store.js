import { configureStore } from "@reduxjs/toolkit";
import preferencesReducer from "./slices/preferencesSlice";

export const store = configureStore({
    reducer: {
        preferences: preferencesReducer
    }
})