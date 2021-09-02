import { AutoSizeTextarea, Avatar } from 'components';
import { authSelector } from 'features/auth/authSlice';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import './CommentInput.scss';

type Props = {
    onSubmit?: () => void;
};

const CommentInput = ({ onSubmit }: Props) => {
    const { user } = useSelector(authSelector);
    const { t } = useTranslation();
    return (
        <div className="comment-input">
            <Avatar size={4} src={user?.avatar?.url} />
            <AutoSizeTextarea
                className="comment-input__textarea"
                placeholder={t('components.comment_input.placeholder')}
                onPressEnter={(v) => console.log(v)}
            />
        </div>
    );
};

export default React.memo(CommentInput);
