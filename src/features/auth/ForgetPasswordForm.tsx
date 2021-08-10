import { IMAGES } from 'assets';
import { Spin } from 'components';
import { FormikErrors, useFormik } from 'formik';
import i18n from 'i18n';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { FormInputItem } from 'schema';
import { validateEmail } from 'utils/validation';
import { renderInput } from './LoginForm';

const inputItems: FormInputItem[] = [
    { name: 'email', label: 'login.form.label.email', type: 'email' },
];

interface FormValues {
    email?: string;
}

type Props = {};

const ForgetPasswordForm = ({}: Props) => {
    const { t } = useTranslation();
    const history = useHistory();

    const formik = useFormik<FormValues>({
        initialValues: {
            email: '',
        },
        validate: ({ email }: FormValues) => {
            let errors: FormikErrors<FormValues> = {};
            if (!email) {
                errors.email = i18n.t(
                    'forget_password.form.error.email.required',
                );
            } else if (!validateEmail(email)) {
                errors.email = i18n.t(
                    'forget_password.form.error.email.invalid',
                );
            }

            return errors;
        },
        onSubmit: (v) => {
            // handleFinish(v);
        },
    });

    const handleNavigateHome = () => {
        history.push('/login');
    };

    return (
        <form onSubmit={formik.handleSubmit} className="login-form">
            <h1 className="title">{t('forget_password.form.title')}</h1>
            <h1 className="sub-title">{t('forget_password.form.sub_title')}</h1>
            <img src={IMAGES.rocket} alt="rocket" className="rocket" />

            {renderInput(inputItems, {
                values: formik.values,
                errors: formik.errors,
                handleChange: formik.handleChange,
                touched: formik.touched,
            })}

            <button type="submit" className="btn">
                {false ? <Spin /> : t('forget_password.form.btn')}
            </button>
            <div onClick={handleNavigateHome} className="home-link">
                {t('forget_password.form.home_link')}
            </div>
        </form>
    );
};

export default ForgetPasswordForm;
