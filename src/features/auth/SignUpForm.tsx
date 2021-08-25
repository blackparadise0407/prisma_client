import { IMAGES } from 'assets';
import { Alert, CheckBox, Spin } from 'components';
import { FormikErrors, useFormik } from 'formik';
import i18n from 'i18n';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { FormInputItem } from 'schema';
import { hasSpecialCharaters, validateEmail } from 'utils/validation';
import { authSelector, clearError, resetStatus, signup } from './authSlice';
import { renderInput } from './LoginForm';

interface FormValues {
    username: string;
    email: string;
    password: string;
    confirm_password: string;
}

const inputItems: FormInputItem[] = [
    { name: 'username', label: 'form.label.username' },
    { name: 'email', label: 'form.label.email', type: 'email' },
    {
        name: 'password',
        label: 'form.label.password',
        type: 'password',
    },
    {
        name: 'confirm_password',
        label: 'form.label.confirm_password',
        type: 'password',
    },
];

const SignUpForm = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { status, error } = useSelector(authSelector);

    const [success, setSuccess] = useState(false);

    const onFinish = (v: FormValues) => {
        dispatch(signup(v));
    };

    const formik = useFormik<FormValues>({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirm_password: '',
        },
        validate: ({ email, password, confirm_password, username }) => {
            const errors: FormikErrors<FormValues> = {};
            if (!username) {
                errors.username = i18n.t('form.error.username.required');
            } else if (hasSpecialCharaters(username)) {
                errors.username = i18n.t('form.error.username.invalid');
            } else if (username.length < 3) {
                errors.username = i18n.t('form.error.username.min');
            } else if (username.length > 20) {
                errors.username = i18n.t('form.error.username.max');
            }
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
            if (!confirm_password) {
                errors.confirm_password = i18n.t(
                    'form.error.confirm_password.required',
                );
            } else if (password !== confirm_password) {
                errors.confirm_password = i18n.t(
                    'form.error.password.not_match',
                );
            }
            return errors;
        },
        onSubmit: (v) => {
            onFinish(v);
        },
    });

    const handleClose = () => {
        setSuccess(false);
    };

    useEffect(() => {
        if (status === 'success') {
            setSuccess(true);
            formik.resetForm();
            dispatch(resetStatus());
        }
    }, [status]);

    useEffect(() => {
        return () => {
            dispatch(resetStatus());
            dispatch(clearError());
            setSuccess(false);
        };
    }, []);

    return (
        <form onSubmit={formik.handleSubmit} className="login-form">
            <h1 className="title">{t('signup.form.title')}</h1>
            <img src={IMAGES.rocket} alt="rocket" className="rocket" />
            {success && (
                <Alert
                    autoClose={5}
                    onClose={handleClose}
                    closable
                    type="success"
                    message={t('signup.form.success')}
                />
            )}
            {error && (
                <Alert autoClose={5} closable type="error" message={error} />
            )}
            {renderInput(inputItems, {
                values: formik.values,
                errors: formik.errors,
                handleChange: formik.handleChange,
                touched: formik.touched,
            })}
            <div className="util">
                <CheckBox label={t('signup.form.newsletter')} />
            </div>
            <button type="submit" className="btn">
                {status === 'loading' ? (
                    <Spin />
                ) : (
                    t('signup.form.register_button')
                )}
            </button>
            <div className="reminder">
                {t('signup.form.reminder')}
                <a href="#a">{t('signup.form.contact')}</a>
            </div>
        </form>
    );
};

export default SignUpForm;
