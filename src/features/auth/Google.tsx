import { Text } from 'components';
import { findIndex, includes } from 'lodash';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { authSelector, googleLogin } from './authSlice';

const getToken = (hash: string): string => {
    const hashArray = hash.slice(1).split('&');
    const tokenIdx = findIndex(hashArray, (i) => includes(i, 'access_token'));
    if (tokenIdx > -1) {
        return hashArray[tokenIdx].split('=')[1];
    } else return '';
};

const Google = () => {
    const history = useHistory();
    const { hash } = useLocation();
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const { status } = useSelector(authSelector);

    useEffect(() => {
        if (getToken(hash)) {
            dispatch(googleLogin(getToken(hash)));
        }
    }, [hash]);

    useEffect(() => {
        if (status === 'success') {
            history.push('/');
        }
    }, [status]);

    return <Text size="large">{t('google.redirect')}</Text>;
};

export default Google;
