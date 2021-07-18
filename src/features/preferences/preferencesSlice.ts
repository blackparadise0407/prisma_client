import { createSlice } from '@reduxjs/toolkit';
import { AppState } from 'app/rootReducer';

export type SupportedTheme = 'default' | 'dark';
export type SupportedLanguage = 'vi' | 'en';

export interface PreferencesState {
    lang?: SupportedLanguage;
    theme?: SupportedTheme;
}

const preferencesInitState: PreferencesState = {
    lang: 'en',
    theme: (localStorage.getItem('theme') as SupportedTheme) || 'default',
};

export const preferencesSlice = createSlice({
    name: 'preferences',
    initialState: preferencesInitState,
    reducers: {
        updateTheme: (state, { payload }) => {
            state.theme = payload as SupportedTheme;
        },
        updateLang: (state, { payload }) => {
            state.lang = payload as SupportedLanguage;
        },
    },
});

export const { updateTheme, updateLang } = preferencesSlice.actions;

export const preferencesSelector = (state: AppState) => state.preferences;

export default preferencesSlice.reducer;
