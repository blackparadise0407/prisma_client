import { findIndex, includes } from 'lodash';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { AppState } from 'schema';
import { googleLogin } from './authSlice';

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

    const { status } = useSelector((state: AppState) => state.auth);

    useEffect(() => {
        console.log(hash);
        if (getToken(hash)) {
            dispatch(googleLogin(getToken(hash)));
        }
    }, [hash]);

    useEffect(() => {
        if (status === 'success') {
            history.push('/');
        }
    }, [status]);

    return null;
};

export default Google;
