import { createSlice } from '@reduxjs/toolkit';
import { AppState } from 'schema';

export type SupportedLanguage = 'en' | 'vi';

export interface LocaleState {
    lang?: SupportedLanguage;
}

const localeInitState: LocaleState = {
    lang: 'en',
};

export const localeSlice = createSlice({
    name: 'locale',
    initialState: localeInitState,
    reducers: {
        changeLang: (state, { payload }) => {
            state.lang = payload as SupportedLanguage;
        },
    },
});

export const { changeLang } = localeSlice.actions;

export const localeSelector = (state: AppState) => state.locale;

export default localeSlice.reducer;
