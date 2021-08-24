import clsx from 'clsx';
import React from 'react';
import { useCallback } from 'react';
import './styles.scss';

type ButtonType = 'default' | 'primary' | 'danger' | 'secondary' | 'ghost';

type HTMLType = 'button' | 'reset' | 'submit';

type Props = {
    onClick?: () => void;
    children: string;
    type?: ButtonType;
    icon?: JSX.Element;
    htmlType?: HTMLType;
    block?: boolean;
    loading?: boolean;
    className?: string;
};

const Button = ({
    htmlType = 'button',
    children,
    onClick,
    type = 'default',
    icon,
    block = false,
    loading = false,
    className,
}: Props) => {
    const handleOnClick = useCallback(() => {
        onClick && !loading && onClick();
    }, [onClick]);

    return (
        <button
            type={htmlType}
            className={clsx(
                className,
                'button',
                `button--${type}`,
                block && 'button--block',
                loading && 'button--loading',
            )}
            onClick={handleOnClick}
        >
            <div className="text">{loading ? 'Loading' : children}</div>
            <span className={clsx(icon && 'icon')}>{icon}</span>
        </button>
    );
};

export default React.memo(Button);
