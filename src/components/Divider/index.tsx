import clsx from 'clsx';
import React from 'react';
import './styles.scss';

type Size = 'middle' | 'large';

type Props = {
    size?: Size;
};

const Divider = ({ size = 'middle' }: Props) => {
    return <div className={clsx('divider', `divider--${size}`)}></div>;
};

export default Divider;
