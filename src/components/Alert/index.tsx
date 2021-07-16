import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import './styles.scss';

type Props = {
    message: string;
    closable?: boolean;
    type?: AlertType;
    autoClose?: number;
    onClose?: () => void;
};

type AlertType = 'success' | 'warning' | 'error' | 'info';

const Alert = ({
    message,
    closable,
    autoClose,
    type = 'info',
    onClose,
}: Props) => {
    const [isShow, setIsShow] = useState<boolean>(true);
    useEffect(() => {
        if (autoClose) {
            const _timeout = setTimeout(() => {
                setIsShow(false);
                onClose && onClose();
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
        onClose && onClose();
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
