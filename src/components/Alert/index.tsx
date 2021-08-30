import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
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
        const _timeout = setTimeout(() => {
            if (autoClose) {
                setIsShow(false);
                onClose && onClose();
            }
        }, autoClose * 1000);

        return () => {
            clearTimeout(_timeout);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

export default React.memo(Alert);
