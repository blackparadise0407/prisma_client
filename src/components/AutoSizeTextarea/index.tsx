import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import './styles.scss';

type Props = {
    className?: string;
    onPressEnter?: (v: string) => void;
    [key: string]: any;
};

const AutoSizeTextarea = ({ className, onPressEnter, ...rest }: Props) => {
    const [currentValue, setCurrentValue] = useState('');
    const ref = useRef(null);

    useEffect(() => {
        ref.current.style.height = '0px';
        const scrollHeight = ref.current.scrollHeight;
        ref.current.style.height = scrollHeight + 'px';
    }, [currentValue]);

    const _handleChange = (e) => {
        setCurrentValue(e.target.value);
    };

    const _handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            onPressEnter && onPressEnter(currentValue);
        }
    };

    return (
        <textarea
            className={clsx('textarea', className)}
            value={currentValue}
            ref={ref}
            onKeyDown={_handleKeyDown}
            onChange={_handleChange}
            {...rest}
        />
    );
};

export default React.memo(AutoSizeTextarea);
