import { IMAGES } from 'assets';
import { Alert, Spin } from 'components';
import { FormikErrors, useFormik } from 'formik';
import i18n from 'i18n';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FormInputItem } from 'schema';
import { validateEmail } from 'utils/validation';
import {
    authSelector,
    clearError,
    forgetPassword,
    resetStatus,
} from './authSlice';
import { renderInput } from './LoginForm';

const inputItems: FormInputItem[] = [
    { name: 'email', label: 'form.label.email', type: 'email' },
];

interface FormValues {
    email?: string;
}

const ForgetPasswordForm = () => {
    const dispatch = useDispatch();
    const { status } = useSelector(authSelector);

    const [success, setSuccess] = useState(false);

    const { t } = useTranslation();
    const history = useHistory();

    const handleFinish = (v: string) => {
        dispatch(forgetPassword(v));
    };

    const formik = useFormik<FormValues>({
        initialValues: {
            email: '',
        },
        validate: ({ email }: FormValues) => {
            let errors: FormikErrors<FormValues> = {};
            if (!email) {
                errors.email = i18n.t('form.error.email.required');
            } else if (!validateEmail(email)) {
                errors.email = i18n.t('form.error.email.invalid');
            }

            return errors;
        },
        onSubmit: (v) => {
            handleFinish(v.email);
        },
    });

    const handleNavigateHome = () => {
        history.push('/login');
    };

    const handleClose = () => {
        setSuccess(false);
        dispatch(resetStatus());
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
            <h1 className="title">{t('forget_password.form.title')}</h1>
            <h1 className="sub-title">{t('forget_password.form.sub_title')}</h1>
            <img src={IMAGES.rocket} alt="rocket" className="rocket" />
            {success && (
                <Alert
                    autoClose={5}
                    onClose={handleClose}
                    closable
                    type="success"
                    message={t('forget_password.form.success')}
                />
            )}
            {renderInput(inputItems, {
                values: formik.values,
                errors: formik.errors,
                handleChange: formik.handleChange,
                touched: formik.touched,
            })}

            <button type="submit" className="btn">
                {status === 'loading' ? (
                    <Spin />
                ) : (
                    t('forget_password.form.btn')
                )}
            </button>
            <div onClick={handleNavigateHome} className="home-link">
                {t('forget_password.form.home_link')}
            </div>
        </form>
    );
};

export default ForgetPasswordForm;
