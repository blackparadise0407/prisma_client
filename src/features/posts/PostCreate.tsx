import { Button, Divider } from 'components';
import { authSelector } from 'features/auth/authSlice';
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { AiFillApi } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import './PostCreate.scss';

const PostCreate = () => {
    const { t } = useTranslation();
    const { user } = useSelector(authSelector);

    return (
        <form className="post-create">
            <textarea
                placeholder={`${t('newsfeed.post_create.placeholder')}, ${
                    user?.username
                }?`}
            />

            <Divider />
            <div className="action">
                <div className="action-list">
                    <div className="action-item"></div>
                </div>
                <Button outlined icon={<AiFillApi />}>
                    Heloo
                </Button>
            </div>
        </form>
    );
};

export default PostCreate;
