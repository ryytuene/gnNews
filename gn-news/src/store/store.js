import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./slices/newsSlice";
import preferencesReducer from "./slices/preferencesSlice";

export const store = configureStore({
    reducer: {
        preferences: preferencesReducer,
        news: newsReducer
    }
})