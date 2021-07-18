import clsx from 'clsx';
import Spin from 'components/Spin';
import React from 'react';
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
};

const Button = ({
    htmlType = 'button',
    children,
    onClick,
    type = 'default',
    icon,
    block = false,
    loading = false,
}: Props) => {
    const handleOnClick = () => {
        onClick && !loading && onClick();
    };
    return (
        <button
            type={htmlType}
            className={clsx(
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

export default Button;
