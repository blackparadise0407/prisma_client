import { AutoSizeTextarea, Avatar } from 'components';
import { authSelector } from 'features/auth/authSlice';
import React from 'react';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import './CommentInput.scss';

type Props = {
    onSubmit?: (v: string) => void;
};

const CommentInput = ({ onSubmit }: Props) => {
    const { user } = useSelector(authSelector);
    const { t } = useTranslation();

    const _handleSubmit = useCallback((v: string) => {
        if (v && onSubmit) onSubmit(v);
    }, []);

    return (
        <div className="comment-input">
            <Avatar size={4} src={user?.avatar?.url} />
            <AutoSizeTextarea
                className="comment-input__textarea"
                placeholder={t('components.comment_input.placeholder')}
                onPressEnter={_handleSubmit}
            />
        </div>
    );
};

export default React.memo(CommentInput);
