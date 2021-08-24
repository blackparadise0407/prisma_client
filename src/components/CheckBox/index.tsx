import React, { ChangeEvent } from 'react';
import './styles.scss';

type Props = {
    label?: string;
    name?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    value?: boolean;
    defaultValue?: boolean;
};

const CheckBox = ({ label, name, onChange, value, defaultValue }: Props) => {
    return (
        <label className="check-box">
            {label}
            <input
                checked={value}
                name={name}
                type="checkbox"
                onChange={onChange}
                defaultChecked={defaultValue}
            />
            <span className="check-mark"></span>
        </label>
    );
};

export default React.memo(CheckBox);
