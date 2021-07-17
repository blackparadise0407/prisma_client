import clsx from 'clsx';
import React from 'react';
import './styles.scss';

type ButtonType = 'default' | 'primary' | 'danger' | 'secondary';

type HTMLType = 'button' | 'reset' | 'submit';

type Props = {
    onClick?: () => void;
    children: string;
    type?: ButtonType;
    icon?: JSX.Element;
    htmlType?: HTMLType;
    block?: boolean;
    outlined?: boolean;
};

const Button = ({
    htmlType = 'button',
    children,
    onClick,
    type = 'default',
    icon,
    block = false,
    outlined = false,
}: Props) => {
    return (
        <button
            type={htmlType}
            className={clsx(
                'button',
                `button--${type}${outlined ? '--outline' : ''}`,
                `button--${type}`,
                block && 'button--block',
            )}
            onClick={onClick}
        >
            {children} <span>{icon}</span>
        </button>
    );
};

export default Button;
