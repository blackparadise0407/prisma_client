import { ResetPasswordRequest } from 'api/_apis/auth';
import { IMAGES } from 'assets';
import { Alert, Spin } from 'components';
import { FormikErrors, useFormik } from 'formik';
import { useQuery } from 'hooks';
import i18n from 'i18n';

import React, { useState } from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FormInputItem } from 'schema';
import {
    authSelector,
    clearError,
    resetPassword,
    resetStatus,
} from './authSlice';
import { renderInput } from './LoginForm';

const inputItems: FormInputItem[] = [
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

interface FormValues {
    password: string;
    confirm_password: string;
    code: string;
}

const ResetPasswordForm = () => {
    const { code } = useQuery<{ code: string }>();

    const dispatch = useDispatch();
    const { status, error } = useSelector(authSelector);

    const [success, setSuccess] = useState(false);

    const { t } = useTranslation();
    const history = useHistory();

    const handleFinish = (v: ResetPasswordRequest) => {
        dispatch(resetPassword(v));
    };

    const formik = useFormik<FormValues>({
        initialValues: {
            password: '',
            confirm_password: '',
            code,
        },
        validate: ({ password, confirm_password }: FormValues) => {
            let errors: FormikErrors<FormValues> = {};
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
            handleFinish(v);
        },
    });

    const handleNavigateHome = () => {
        history.push('/login');
    };

    const handleClose = () => {
        setSuccess(false);
        dispatch(resetStatus());
    };

    const handleCloseError = () => {
        dispatch(clearError());
    };

    useEffect(() => {
        if (status === 'success') {
            setSuccess(true);
            dispatch(resetStatus());
        }
    }, [status]);

    useEffect(() => {
        return () => {
            dispatch(resetStatus());
            dispatch(clearError());
        };
    }, []);

    return (
        <form onSubmit={formik.handleSubmit} className="login-form">
            <h1 className="title">{t('reset_password.form.title')}</h1>
            <img src={IMAGES.rocket} alt="rocket" className="rocket" />
            {success && (
                <Alert
                    onClose={handleClose}
                    closable
                    type="success"
                    message={t('reset_password.form.success')}
                />
            )}
            {error && (
                <Alert
                    onClose={handleCloseError}
                    closable
                    type="error"
                    message={error}
                />
            )}
            {renderInput(inputItems, {
                values: formik.values,
                errors: formik.errors,
                handleChange: formik.handleChange,
                touched: formik.touched,
            })}

            <button type="submit" className="btn">
                {status === 'loading' ? <Spin /> : t('reset_password.form.btn')}
            </button>
            <div onClick={handleNavigateHome} className="home-link">
                {t('reset_password.form.home_link')}
            </div>
        </form>
    );
};

export default ResetPasswordForm;
