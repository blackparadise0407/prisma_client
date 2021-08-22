import { AutoSizeTextarea, Avatar } from 'components';
import { authSelector } from 'features/auth/authSlice';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import './CommentInput.scss';

type Props = {
    test?: any;
};

const CommentInput = ({ test }: Props) => {
    const { user } = useSelector(authSelector);
    const { t } = useTranslation();
    return (
        <div className="comment-input">
            <Avatar size={4} src={user?.avatar?.url} />
            <AutoSizeTextarea
                placeholder={t('components.comment_input.placeholder')}
                className="comment-input__textarea"
            />
        </div>
    );
};

export default React.memo(CommentInput);
