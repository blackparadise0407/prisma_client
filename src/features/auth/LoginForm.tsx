import React from 'react';
import { FormikErrors, FormikProps, withFormik } from 'formik';
import './LoginForm.scss';
import { FormInput } from 'components';
import { FormInputItem } from 'schema';
import { map } from 'lodash';
import { validateEmail } from 'utils/validation';
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';

interface FormValues {
    email: string;
    password: string;
}

interface Props {}

const inputItems: FormInputItem[] = [
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'password', label: 'Password', type: 'password' },
];

function renderInput(
    items: FormInputItem[],
    { values, errors, handleChange }: any,
): JSX.Element[] {
    return map(items, (i) => (
        <FormInput
            className="input"
            name={i.name}
            type={i.type}
            label={i.label}
            onChange={handleChange}
            value={values[i.name]}
            error={errors[i.name]}
        />
    ));
}

const LoginForm = ({
    values,
    touched,
    errors,
    handleChange,
}: Props & FormikProps<FormValues>) => {
    const { t } = useTranslation();
    return (
        <form className="login-form">
            {/* <div className="container"> */}
            <h1 className="title">{t('login.form_title')}</h1>
            {renderInput(inputItems, {
                values,
                errors,
                handleChange,
            })}
            <div className="util">
                <label className="remember">
                    {t('login.form_remember')}
                    <input type="checkbox" name="remember" />
                    <span className="check-mark"></span>
                </label>
                <div className="forgot-password">
                    {t('login.form_forget_password')}
                </div>
            </div>
            <button className="btn">{t('login.form_login_button')}</button>
            <div className="divider">
                <div className="text">{t('login.form_divider')}</div>
            </div>
            {/* </div> */}
        </form>
    );
};

const enhancedLoginForm = withFormik<any, FormValues>({
    mapPropsToValues: ({ email, password }) => ({
        email: email || '',
        password: password || '',
    }),
    validate: ({ email, password }: FormValues) => {
        let errors: FormikErrors<FormValues> = {};
        if (!email) {
            errors.email = i18n.t('login.required_email');
        } else if (!validateEmail(email)) {
            errors.email = i18n.t('login.invalid_email');
        }
        return errors;
    },
    handleSubmit: (v) => {
        console.log(v);
    },
})(LoginForm);

export default enhancedLoginForm;
