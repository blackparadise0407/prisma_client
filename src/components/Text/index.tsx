import clsx from 'clsx';
import React from 'react';
import './styles.scss';

type Size = 'middle' | 'large' | 'small';

type Props = {
    size?: Size;
    children: string;
    className?: string;
};

const Text = ({ size = 'middle', children, className }: Props) => {
    return (
        <div className={clsx('text', `text--${size}`, className)}>
            {children}
        </div>
    );
};

export default Text;
