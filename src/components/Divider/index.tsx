import clsx from 'clsx';
import React from 'react';
import './styles.scss';

type Size = 'middle' | 'large';

type Props = {
    size?: Size;
    width?: string;
};

const Divider = ({ size = 'middle', width = '100%' }: Props) => {
    return (
        <div
            className={clsx('divider', `divider--${size}`)}
            style={{ width }}
        ></div>
    );
};

export default Divider;
