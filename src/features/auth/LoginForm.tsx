import { IMAGES } from 'assets';
import { Alert, CheckBox, FormInput, Spin } from 'components';
import { config } from 'constant/config';
import { FormikErrors, useFormik } from 'formik';
import { useQuery } from 'hooks';
import i18n from 'i18n';
import { map } from 'lodash';
import qs from 'query-string';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
    AiFillFacebook,
    AiOutlineGithub,
    AiOutlineGoogle,
} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FormInputItem } from 'schema';
import { validateEmail } from 'utils/validation';
import { authSelector, clearError, login, resetStatus } from './authSlice';
import './LoginForm.scss';

const queries = qs.stringify({
    client_id: config.google.client_id,
    redirect_uri: config.google.redirect_uri,
    scope: config.google.scope,
    response_type: config.google.response_type,
});

interface FormValues {
    email?: string;
    password?: string;
}

const inputItems: FormInputItem[] = [
    { name: 'email', label: 'form.label.email', type: 'email' },
    {
        name: 'password',
        label: 'form.label.password',
        type: 'password',
    },
];

export function renderInput(
    items: FormInputItem[],
    { values, errors, handleChange, touched }: any,
): JSX.Element[] {
    return map(items, (i) => (
        <FormInput
            key={i.name}
            className="input"
            name={i.name}
            type={i.type}
            label={i.label}
            onChange={handleChange}
            value={values[i.name]}
            error={errors[i.name]}
            autoComplete
        />
    ));
}

const LoginForm = () => {
    const { email } = useQuery<{ email: string }>();
    const { t } = useTranslation();
    const history = useHistory();
    const dispatch = useDispatch();
    const { isAuth, error, status } = useSelector(authSelector);

    const handleFinish = (v: FormValues) => {
        dispatch(login(v));
    };

    const handleClearError = () => {
        dispatch(clearError());
    };

    const navigateToForgetPassword = () => {
        history.push('/forget-password');
    };

    useEffect(() => {
        if (isAuth) {
            history.push('/');
        }
    }, [history, isAuth]);

    useEffect(() => {
        return () => {
            dispatch(resetStatus());
            dispatch(clearError());
        };
    }, []);

    const formik = useFormik<FormValues>({
        initialValues: {
            email: email || '',
            password: '',
        },
        validate: ({ email, password }: FormValues) => {
            let errors: FormikErrors<FormValues> = {};
            if (!email) {
                errors.email = i18n.t('form.error.email.required');
            } else if (!validateEmail(email)) {
                errors.email = i18n.t('form.error.email.invalid');
            }
            if (!password) {
                errors.password = i18n.t('form.error.password.required');
            } else if (password.length < 3) {
                errors.password = i18n.t('form.error.password.min');
            } else if (password.length > 20) {
                errors.password = i18n.t('form.error.password.max');
            }
            return errors;
        },
        onSubmit: (v) => {
            handleFinish(v);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="login-form">
            <h1 className="title">{t('login.form.title')}</h1>
            <img src={IMAGES.rocket} alt="rocket" className="rocket" />
            {error && (
                <Alert
                    closable
                    type="error"
                    message={error}
                    onClose={handleClearError}
                />
            )}
            {renderInput(inputItems, {
                values: formik.values,
                errors: formik.errors,
                handleChange: formik.handleChange,
                touched: formik.touched,
            })}
            <div className="util">
                <CheckBox name="remember" label={t('login.form.remember')} />
                <div
                    onClick={navigateToForgetPassword}
                    className="forgot-password"
                >
                    {t('login.form.forget_password')}
                </div>
            </div>
            <button type="submit" className="btn">
                {status === 'loading' ? <Spin /> : t('login.form.login_button')}
            </button>
            <div className="divider">
                <div className="text">{t('login.form.divider')}</div>
            </div>
            <div className="social">
                <a
                    href={`${config.google.url}?${queries}`}
                    className="item google"
                >
                    <AiOutlineGoogle className="icon" />
                </a>
                <a href="#a" className="item github">
                    <AiOutlineGithub className="icon" />
                </a>
                <a href="#a" className="item facebook">
                    <AiFillFacebook className="icon" />
                </a>
            </div>
        </form>
    );
};

export default LoginForm;
