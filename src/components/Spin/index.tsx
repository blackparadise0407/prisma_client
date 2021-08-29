import clsx from 'clsx';
import { config } from 'constant/config';
import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import './styles.scss';

type Props = {
    size?: number;
    className?: string;
    // [key: string]: any;
};

const Spin = ({ size = 2 * 10, className }: Props) => {
    return (
        <AiOutlineLoading3Quarters
            className={clsx('spinner', className)}
            style={{ fontSize: `${size / config.rootFontSize}rem` }}
        />
        // <div w>
        // </div>
    );
};

export default Spin;
