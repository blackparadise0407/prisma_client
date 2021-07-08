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
            {renderInput(inputItems, {
                values,
                errors,
                handleChange,
            })}
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
