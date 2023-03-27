import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    countries: [
        { country: 'Polska', code: 'pl' },
        { country: 'Stany Zjednoczone', code: 'us' }
    ],
    currentCountry: null,
    news: [],
    isLoading: true,
    error: null
}

export const fetchNews = createAsyncThunk('countries/fetchNews', async code => {
    const response = await fetch('https://newsapi.org/v2/top-headlines?pageSize=100&country=' + code, {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Authorization": "Bearer " + process.env.REACT_APP_NEWSAPI_KEY
        }
    });
    return response.json();
})

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setCurrentCountry: (state, { payload }) => {
            if (!payload) {
                state.news = [];
                state.currentCountry = null;
            } else {
                const country = state.countries.find(item => item.country === payload)
                if (!country) {
                    state.error = 'no country in list'
                    state.currentCountry = null;
                } else {
                    state.currentCountry = country;
                }
            }
        },
        clearError: state => {
            state.error = null;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchNews.pending, state => {
            state.isLoading = true;
        })
        builder.addCase(fetchNews.rejected, state => {
            state.error = 'rejected';
            state.isLoading = false;
        })
        builder.addCase(fetchNews.fulfilled, (state, { payload }) => {
            if (payload.status === 'ok') {
                state.news = payload.articles;
            } else {
                state.error = payload.code;
            }
            state.isLoading = false;
        })
    }
})

export const selectCountries = state => state.news.countries;
export const selectCurrentCountry = state => state.news.currentCountry;
export const selectNews = state => state.news.news
export const selectNewsLoading = state => state.news.isLoading
export const selectError = state => state.news.error

export const { setCurrentCountry, clearError } = newsSlice.actions

export default newsSlice.reducer