import clsx from 'clsx';
import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { unmountComponentAtNode } from 'react-dom';

import './styles.scss';

type Props = {
    message: string;
    closable?: boolean;
    type?: AlertType;
    autoClose?: number;
};

type AlertType = 'success' | 'warning' | 'error' | 'info';

const Alert = ({ message, closable, autoClose, type = 'info' }: Props) => {
    const [isShow, setIsShow] = useState<boolean>(true);
    useEffect(() => {
        if (autoClose) {
            const _timeout = setTimeout(() => {
                setIsShow(false);
            }, autoClose * 1000);
            return () => {
                clearTimeout(_timeout);
            };
        }
    }, []);

    useEffect(() => {
        setIsShow(true);
    }, [message]);

    const handleClose = () => {
        setIsShow(false);
    };
    return (
        <div
            className={clsx(
                'alert',
                !isShow && 'alert--hiden',
                `alert--${type}`,
            )}
        >
            {message}
            {closable && <div onClick={handleClose} className="icon" />}
        </div>
    );
};

export default Alert;
