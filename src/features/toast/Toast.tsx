import clsx from 'clsx';
import i18n from 'i18n';
import React, { useCallback, useEffect, useRef } from 'react';
import {
    AiOutlineCheckCircle,
    AiOutlineClose,
    AiOutlineCloseCircle,
    AiOutlineInfoCircle,
    AiOutlineWarning,
} from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import './Toast.scss';
import { ToastPosition } from './ToastContainer';
import { autoRemove, remove, Toast as IToast, ToastType } from './toastSlice';

type Props = {
    autoClose?: number | boolean;
    toast: IToast;
    position: ToastPosition;
};

const _getTitle = (type: ToastType): string => {
    switch (type) {
        case 'success':
            return i18n.t('toast.success');
        case 'info':
            return i18n.t('toast.info');
        case 'error':
            return i18n.t('toast.error');
        case 'warning':
            return i18n.t('toast.warning');
        default:
            return '';
    }
};

const Toast = ({
    autoClose = false,
    position,
    toast: { title, content, type, id },
}: Props) => {
    const dispatch = useDispatch();
    const toastEl = useRef(null);

    const handleRemove = useCallback((id: number) => {
        dispatch(remove(id));
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (autoClose) {
                console.log('why true');
                dispatch(autoRemove());
            }
        }, autoClose as number);
        return () => {
            clearInterval(interval);
        };
    }, []);

    // useEffect(() => {
    //     gsap.fromTo(
    //         toastEl.current,
    //         { opacity: 0, x: 500 },
    //         { opacity: 1, x: 0 },
    //     );
    // }, []);

    return (
        <div
            className={clsx('toast', `toast--${type}`, `toast--${position}`)}
            ref={toastEl}
        >
            <div className="toast__left">
                {type === 'success' && (
                    <AiOutlineCheckCircle className="icon" />
                )}
                {type === 'info' && <AiOutlineInfoCircle className="icon" />}
                {type === 'error' && <AiOutlineCloseCircle className="icon" />}
                {type === 'warning' && <AiOutlineWarning className="icon" />}
            </div>
            <div className="toast__right">
                <div className="title">{_getTitle(type)}</div>
                <div className="content">{content || ''}</div>
            </div>
            <AiOutlineClose
                onClick={() => handleRemove(id)}
                className="toast__close-icon"
            />
        </div>
    );
};

export default React.memo(Toast);
