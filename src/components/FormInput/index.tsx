import clsx from 'clsx';
import React, { ChangeEventHandler, useRef, useState } from 'react';
import { useEffect } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { InputType } from 'schema';
import './styles.scss';

type Props = {
    name?: string;
    label?: string;
    value?: string;
    error?: string;
    type?: InputType;
    className?: string;
    onChange?: (e: ChangeEventHandler) => void;
};

const FormInput = ({
    label,
    value,
    type = 'text',
    onChange,
    error,
    name,
    className,
    ...rest
}: Props) => {
    const inputEl = useRef(null);
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const [_val, setVal] = useState<string>(value);
    const [isShow, setIsShow] = useState<boolean>(false);

    useEffect(() => {
        if (_val) {
            setIsFocus(true);
        }
    }, []);

    const handleFocus = () => {
        setIsFocus(true);
    };

    const handleBlur = () => {
        if (!_val) setIsFocus(false);
    };

    const handleChange = (e) => {
        setVal(e.target.value as string);
        onChange && onChange(e);
    };

    const toggleShow = () => {
        setIsShow(!isShow);
    };

    return (
        <div
            className={clsx(
                'form-input',
                isFocus && 'form-input--focus',
                className,
            )}
        >
            <div className="label">{label}</div>
            <input
                name={name}
                type={
                    type === 'password' ? (isShow ? 'text' : 'password') : type
                }
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                ref={inputEl}
                value={_val}
                {...rest}
            />
            {type === 'password' &&
                (!isShow ? (
                    <AiOutlineEyeInvisible
                        onClick={toggleShow}
                        className="icon"
                    />
                ) : (
                    <AiOutlineEye onClick={toggleShow} className="icon" />
                ))}
            {error && <div className="error">{error}</div>}
        </div>
    );
};

export default FormInput;
