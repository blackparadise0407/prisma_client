import { Text } from 'components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Newsfeed.scss';
import PostCreate from './PostCreate';

const Newsfeed = () => {
    const { t } = useTranslation();
    return (
        <div className="newsfeed-wrapper">
            <div className="banner">
                <div className="title-wrapper">
                    <div className="title">{t('newsfeed.banner.title')}</div>
                    <Text size="large" className="sub">
                        {t('newsfeed.banner.sub')}
                    </Text>
                </div>
            </div>

            <div className="content">
                <PostCreate />
            </div>
        </div>
    );
};

export default Newsfeed;
