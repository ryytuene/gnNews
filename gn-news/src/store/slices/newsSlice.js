import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    countries: [
        { country: 'Polska', code: 'pl' },
        { country: 'Stany Zjednoczone', code: 'us' },
        { country: 'Argentyna', code: 'ar' },
        { country: 'Austria', code: 'at' },
        { country: 'Australia', code: 'au' },
        { country: 'Belgia', code: 'be' },
        { country: 'Bułgaria', code: 'bg' },
        { country: 'Brazylia', code: 'br' },
        { country: 'Kanada', code: 'ca' },
        { country: 'Szwajcaria', code: 'ch' },
        { country: 'Chiny', code: 'cn' },
        { country: 'Kolumbia', code: 'co' },
        { country: 'Kuba', code: 'cu' },
        { country: 'Czechy', code: 'cz' },
        { country: 'Niemcy', code: 'de' },
        { country: 'Egipt', code: 'eg' },
        { country: 'Francja', code: 'fr' },
        { country: 'Wielkia Brytania', code: 'gb' },
        { country: 'Grecja', code: 'gr' },
        { country: 'Honk Kong', code: 'hk' },
        { country: 'Węgry', code: 'hu' },
        { country: 'Indonezja', code: 'id' },
        { country: 'Irlandia', code: 'ie' },
        { country: 'Izrael', code: 'il' },
        { country: 'Indie', code: 'in' },
        { country: 'Włochy', code: 'it' },
        { country: 'Japonia', code: 'jp' },
        { country: 'Korea Południowa', code: 'kr' },
        { country: 'Litwa', code: 'lt' },
        { country: 'Łotwa', code: 'lv' },
        { country: 'Maroko', code: 'ma' },
        { country: 'Meksyk', code: 'mx' },
        { country: 'Malezja', code: 'my' },
        { country: 'Nigeria', code: 'ng' },
        { country: 'Holandia', code: 'nl' },
        { country: 'Norwegia', code: 'no' },
        { country: 'Nowa Zelandia', code: 'nz' },
        { country: 'Filipiny', code: 'ph' },
        { country: 'Portugalia', code: 'pt' },
        { country: 'Rumunia', code: 'ro' },
        { country: 'Serbia', code: 'rs' },
        { country: 'Rosja', code: 'ru' },
        { country: 'Arabia Saudyjska', code: 'sa' },
        { country: 'Szwecja', code: 'se' },
        { country: 'Singapur', code: 'sg' },
        { country: 'Słowenia', code: 'si' },
        { country: 'Słowacja', code: 'sk' },
        { country: 'Tajlandia', code: 'th' },
        { country: 'Turcja', code: 'tr' },
        { country: 'Tajwan', code: 'tw' },
        { country: 'Ukraina', code: 'ua' },
        { country: 'Wenezuela', code: 've' },
        { country: 'Republika Południowej Afryki', code: 'za' },
        { country: 'Zjednoczone Emiraty Arabskie', code: 'ae' }
    ],
    currentCountry: null,
    news: [],
    isLoading: true,
    error: null,
    totalResults: 0
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
        },
        calculateTotalResults: state => {
            state.totalResults = state.news.length;
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
export const selectTotalResults = state => state.news.totalResults

export const { setCurrentCountry, clearError, calculateTotalResults } = newsSlice.actions

export default newsSlice.reducer