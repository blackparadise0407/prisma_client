import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from 'app/rootReducer';
import store, { AppThunk } from 'app/store';
import { findIndex } from 'lodash';
import { ReactNode } from 'react';

export type ToastType = 'success' | 'info' | 'error' | 'warning';

export interface Toast {
    content?: ReactNode;
    title?: string;
    type?: ToastType;
    id?: number;
}

export interface ToastState {
    toasts: Toast[];
}

const toastInitState: ToastState = {
    toasts: [],
};

export const toastSlice = createSlice({
    name: 'toast',
    initialState: toastInitState,
    reducers: {
        add: (state, { payload }: PayloadAction<Toast>) => {
            state.toasts.push({
                ...payload,
                id: new Date().getTime(),
            });
        },
        autoRemove: (state) => {
            state.toasts.shift();
        },
        remove: (state, { payload }: PayloadAction<number>) => {
            state.toasts.splice(
                findIndex(state.toasts, (t) => t.id === payload),
                1,
            );
        },
    },
});

export const toast = {
    info: (payload: Toast) => {
        store.dispatch(add({ ...payload, type: 'info' }));
    },
    success: (payload: Toast) => {
        store.dispatch(add({ ...payload, type: 'success' }));
    },
    warn: (payload: Toast) => {
        store.dispatch(add({ ...payload, type: 'warning' }));
    },
    error: (payload: Toast) => {
        store.dispatch(add({ ...payload, type: 'error' }));
    },
};

export const { add, remove, autoRemove } = toastSlice.actions;

export const toastSelector = (state: AppState) => state.toast;

export default toastSlice.reducer;
