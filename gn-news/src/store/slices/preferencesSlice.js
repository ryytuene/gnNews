import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebarVisible: false,
    displayFormat: 'grid',
    clock: new Date().toLocaleTimeString()
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
        },
        refreshClock: state => {
            state.clock = new Date().toLocaleTimeString();
        }
    }
})

export const selectSidebarVisible = state => state.preferences.sidebarVisible;
export const selectDisplayFormat = state => state.preferences.displayFormat;
export const selectClock = state => state.preferences.clock

export const { changeSidebarVisibility, changeDisplayFormat, refreshClock } = preferencesSlice.actions

export default preferencesSlice.reducer