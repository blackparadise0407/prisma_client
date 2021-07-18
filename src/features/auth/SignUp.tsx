import clsx from 'clsx';
import { FlexGrow } from 'components';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { authSelector } from './authSlice';
import LoginForm from './LoginForm';
import './SignUp.scss';
import SignUpForm from './SignUpForm';

const Login = () => {
    const { t } = useTranslation();
    const { pathname } = useLocation();
    const history = useHistory();

    const { isAuth } = useSelector(authSelector);

    useEffect(() => {
        if (isAuth) {
            history.push('/');
        }
    }, [isAuth]);

    const goToLogin = () => {
        history.push('/login');
    };

    const goToRegister = () => {
        history.push('/signup');
    };

    return (
        <div className="signup-page">
            <div className="welcome">
                <div className="logo"></div>
                <div className="heading">
                    <p className="sub">{t('login.heading_sub')}</p>
                    <p className="main">{t('login.heading_main')}</p>
                </div>
                <p className="welcome-text">{t('login.welcome_text')}</p>
                <FlexGrow />
                <div className="btn-group">
                    <button
                        onClick={goToLogin}
                        className={clsx(
                            'btn',
                            'btn-login',
                            pathname === '/login' && 'btn--active',
                        )}
                    >
                        {t('login.login_button')}
                    </button>
                    <button
                        onClick={goToRegister}
                        className={clsx(
                            'btn',
                            'btn-register',
                            pathname === '/signup' && 'btn--active',
                        )}
                    >
                        {t('login.register_button')}
                    </button>
                </div>
            </div>
            {pathname === '/login' ? <LoginForm /> : <SignUpForm />}
        </div>
    );
};

export default Login;
