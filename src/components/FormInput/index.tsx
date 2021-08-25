import clsx from 'clsx';
import React, {
    ChangeEventHandler,
    useCallback,
    useRef,
    useState,
} from 'react';
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
    const [isShow, setIsShow] = useState(false);
    const [isTouch, setIsTouch] = useState(false);

    const handleBlur = useCallback(() => {
        setIsTouch(true);
    }, []);

    const handleChange = (e) => {
        onChange && onChange(e);
    };

    const onLabelClick = useCallback(() => {
        inputEl.current.focus();
    }, []);

    const toggleShow = useCallback(() => {
        setIsShow(!isShow);
    }, [isShow]);
    return (
        <div className={clsx('form-input', className)}>
            <input
                ref={inputEl}
                name={name}
                type={
                    type === 'password' ? (isShow ? 'text' : 'password') : type
                }
                placeholder=" "
                value={value}
                autoComplete={!autoComplete ? 'off' : 'auto'}
                onChange={handleChange}
                onBlur={handleBlur}
                {...rest}
            />
            <label onClick={onLabelClick}>{t(label)}</label>
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

export default React.memo(FormInput);
