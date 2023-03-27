import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countries: [
        { country: 'Polska', code: 'pl' },
        { country: 'Stany Zjednoczone', code: 'us' }
    ]
}

const newsSlice = createSlice({
    name: 'news',
    initialState
})

export const selectCountries = state => state.news.countries;

export default newsSlice.reducer