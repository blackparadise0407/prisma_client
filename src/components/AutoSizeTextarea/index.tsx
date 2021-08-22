import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import './styles.scss';

type Props = {
    className?: string;
    [key: string]: any;
};

const AutoSizeTextarea = ({ className, ...rest }: Props) => {
    const ref = useRef(null);
    const [currentValue, setCurrentValue] = useState('');

    useEffect(() => {
        ref.current.style.height = '0px';
        const scrollHeight = ref.current.scrollHeight;
        ref.current.style.height = scrollHeight + 'px';
    }, [currentValue]);

    const _handleChange = (e) => {
        setCurrentValue(e.target.value);
    };

    return (
        <textarea
            className={clsx('textarea', className)}
            value={currentValue}
            ref={ref}
            onChange={_handleChange}
            {...rest}
        />
    );
};

export default AutoSizeTextarea;
