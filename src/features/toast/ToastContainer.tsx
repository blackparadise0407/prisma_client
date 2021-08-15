import { map } from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';
import './ToastContainer.scss';
import Toast from './Toast';
import { toastSelector } from './toastSlice';
import clsx from 'clsx';

export type ToastPosition =
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left'
    | 'top-center'
    | 'bottom-center';

type Props = {
    autoClose?: number | boolean;
    position?: ToastPosition;
};

const ToastContainer = ({
    autoClose = 5000,
    position = 'top-right',
}: Props) => {
    const { toasts } = useSelector(toastSelector);

    return (
        <div
            className={clsx('toast-container', `toast-container--${position}`)}
        >
            {map(toasts, (toast) => (
                <Toast
                    position={position}
                    autoClose={autoClose}
                    key={toast.id}
                    toast={toast}
                />
            ))}
        </div>
    );
};

export default ToastContainer;
