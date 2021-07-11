import { createSlice } from '@reduxjs/toolkit';
import { AppState } from 'schema';

export type ThemeType = 'default' | 'dark';

export interface ThemeState {
    theme?: ThemeType;
}

const themeInitState: ThemeState = {
    theme: (localStorage.getItem('theme') as ThemeType) || 'default',
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState: themeInitState,
    reducers: {
        change: (state, { payload }: { payload: ThemeType }) => {
            console.log(payload);
            localStorage.setItem('theme', payload);
            state.theme = payload as ThemeType;
        },
    },
});

export const { change } = themeSlice.actions;

export const themeSelector = (state: AppState) => state.theme;

export default themeSlice.reducer;
