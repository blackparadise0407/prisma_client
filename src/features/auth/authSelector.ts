import { createSelector } from 'reselect';
import { authSelector } from './authSlice';

export const selectCurrentUser = createSelector(
    authSelector,
    (state) => state?.user,
);
