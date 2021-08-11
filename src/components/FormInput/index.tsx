import clsx from 'clsx';
import React, { ChangeEventHandler, useRef, useState } from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
    autoComplete?: boolean;
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
    autoComplete = false,
    ...rest
}: Props) => {
    const { t } = useTranslation();
    const inputEl = useRef(null);
    const [isFocus, setIsFocus] = useState<boolean>(false);
    // const [_val, setVal] = useState<string>(value);
    const [isShow, setIsShow] = useState<boolean>(false);
    const [isTouch, setIsTouch] = useState<boolean>(false);

    useEffect(() => {
        if (inputEl.current.value) {
            setIsFocus(true);
        }
    }, []);

    const handleFocus = () => {
        setIsFocus(true);
        inputEl.current.focus();
    };

    const handleBlur = () => {
        if (!inputEl.current.value) setIsFocus(false);
        setIsTouch(true);
    };

    const handleChange = (e) => {
        // setVal(e.target.value as string);
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
            <div className="label" onClick={handleFocus}>
                {t(label)}
            </div>
            <input
                autoComplete={!autoComplete ? 'off' : 'auto'}
                name={name}
                type={
                    type === 'password' ? (isShow ? 'text' : 'password') : type
                }
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                ref={inputEl}
                value={value}
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
            {error && isTouch && <div className="error">{error}</div>}
        </div>
    );
};

export default FormInput;
