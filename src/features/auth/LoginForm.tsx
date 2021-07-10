import { Alert, FormInput, Spin } from 'components';
import { config } from 'constant/config';
import { FormikErrors, FormikProps, withFormik } from 'formik';
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
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AppState, FormInputItem } from 'schema';
import { validateEmail } from 'utils/validation';
import './LoginForm.scss';

const queries = qs.stringify({
    client_id: config.googleClientId,
    redirect_uri: config.googleRedirectURL,
    scope: config.scope,
    response_type: config.response_type,
});

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
        />
    ));
}

const LoginForm = ({
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
}: Props & FormikProps<FormValues>) => {
    const { t } = useTranslation();
    const history = useHistory();
    const { status, error } = useSelector((state: AppState) => state.auth);

    useEffect(() => {
        if (status === 'success') {
            history.push('/');
        }
    }, [status]);

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <h1 className="title">{t('login.form_title')}</h1>

            {error && <Alert closable type="error" message={error} />}
            {renderInput(inputItems, {
                values,
                errors,
                handleChange,
                touched,
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
            <button type="submit" className="btn">
                {status === 'loading' ? <Spin /> : t('login.form_login_button')}
            </button>
            <div className="divider">
                <div className="text">{t('login.form_divider')}</div>
            </div>
            <div className="social">
                <a
                    href={`${config.googleURL}?${queries}`}
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
    handleSubmit: (v, { props }) => {
        console.log(v);
        props.submit(v);
    },
})(LoginForm);

export default enhancedLoginForm;
