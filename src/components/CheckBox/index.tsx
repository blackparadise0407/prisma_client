import React, { ChangeEvent, useEffect, useState } from 'react';
import './styles.scss';

type Props = {
    label?: string;
    name?: string;
    value?: boolean;
    defaultValue?: boolean;
    onChange?: (v: boolean) => void;
};

const CheckBox = ({
    label,
    name,
    value = false,
    onChange,
    defaultValue,
}: Props) => {
    const [_value, setValue] = useState<boolean>(
        defaultValue ? defaultValue : value,
    );

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.checked);
    };

    useEffect(() => {
        onChange && onChange(_value);
    }, [_value]);

    return (
        <label className="check-box">
            {label}
            <input
                onChange={handleChange}
                checked={_value}
                type="checkbox"
                name={name}
            />
            <span className="check-mark"></span>
        </label>
    );
};

export default CheckBox;
