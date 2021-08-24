import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';
import './styles.scss';

type AlertType = 'success' | 'warning' | 'error' | 'info';

type Props = {
    message: string;
    closable?: boolean;
    type?: AlertType;
    autoClose?: number;
    onClose?: () => void;
};

const Alert = ({
    message,
    closable,
    autoClose,
    type = 'info',
    onClose,
}: Props) => {
    const [isShow, setIsShow] = useState(true);
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setIsShow(true);
    }, [message]);

    const handleClose = useCallback(() => {
        setIsShow(false);
        onClose && onClose();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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

export default React.memo(Alert);
