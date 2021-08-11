import { PayloadAction } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';

const isPending = (action: AnyAction) => action.type.endsWith('/pending');
const isFulfilled = (action: AnyAction) => action.type.endsWith('/fulfilled');
const isRejected = (action: AnyAction) => action.type.endsWith('/rejected');

export const isPendingAction = (action: AnyAction): action is any => {
    return isPending(action);
};

export const isRejectedAction = (
    action: AnyAction,
): action is PayloadAction<string> => {
    return isRejected(action);
};

export const isFulfilledAction = (action: AnyAction): action is any => {
    return isFulfilled(action);
};
