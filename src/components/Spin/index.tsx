import { config } from 'constant/config';
import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import './styles.scss';

type Props = {
    size?: number;
};

const Spin = ({ size = 2 * 10 }: Props) => {
    return (
        <AiOutlineLoading3Quarters
            className="loader"
            style={{ fontSize: `${size / config.rootFontSize}rem` }}
        />
        // <div w>
        // </div>
    );
};

export default Spin;
