import clsx from 'clsx';
import i18n from 'i18n';
import React, {
    CSSProperties,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import {
    AiFillCheckCircle,
    AiFillCloseCircle,
    AiFillInfoCircle,
    AiFillWarning,
    AiOutlineClose,
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
    toast: { content, type, id },
}: Props) => {
    const dispatch = useDispatch();
    const [style, setStyle] = useState<CSSProperties>(undefined);
    const toastEl = useRef(null);

    const handleRemove = useCallback((id: number) => {
        dispatch(remove(id));
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (autoClose) {
                setStyle({
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                });
            }
        }, (+autoClose - 500) as number);
        const _interval = setInterval(() => {
            if (autoClose) {
                dispatch(autoRemove());
            }
        }, autoClose as number);
        return () => {
            clearInterval(interval);
            clearInterval(_interval);
        };
    }, []);

    return (
        <div
            className={clsx('toast', `toast--${type}`, `toast--${position}`)}
            ref={toastEl}
            style={style}
        >
            <div className="toast__left">
                {type === 'success' && <AiFillCheckCircle className="icon" />}
                {type === 'info' && <AiFillInfoCircle className="icon" />}
                {type === 'error' && <AiFillCloseCircle className="icon" />}
                {type === 'warning' && <AiFillWarning className="icon" />}
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
