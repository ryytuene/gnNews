import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebarVisible: false,
    displayFormat: 'grid'
}

const preferencesSlice = createSlice({
    name: 'preferences',
    initialState,
    reducers: {
        changeSidebarVisibility: state => {
            state.sidebarVisible = !state.sidebarVisible;
        },
        changeDisplayFormat: state => {
            state.displayFormat = state.displayFormat === 'list' ? 'grid' : 'list'
        }
    }
})

export const selectSidebarVisible = state => state.preferences.sidebarVisible;
export const selectDisplayFormat = state => state.preferences.displayFormat;

export const { changeSidebarVisibility, changeDisplayFormat } = preferencesSlice.actions

export default preferencesSlice.reducer