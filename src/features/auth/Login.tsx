import React from 'react';
import { useTranslation } from 'react-i18next';
import './Login.scss';
import LoginForm from './LoginForm';

const Login = () => {
    const { t } = useTranslation();
    return (
        <div className="login-page">
            <div className="welcome">
                <div className="logo"></div>
                <div className="heading">
                    <p className="sub">{t('login.heading_sub')}</p>
                    <p className="main">{t('login.heading_main')}</p>
                </div>
                <p className="welcome-text">{t('login.welcome_text')}</p>
                <div className="flex-grow"></div>
                <div className="btn-group">
                    <button className="btn btn-login btn--active">
                        {t('login.login_button')}
                    </button>
                    <button className="btn btn-register ">
                        {t('login.register_button')}
                    </button>
                </div>
            </div>
            <LoginForm />
        </div>
    );
};

export default Login;
