import { Text } from 'components';
import { map } from 'lodash';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { UserActions } from 'schema';
import Comment from './Comment';
import './CommentList.scss';
import { getRepliesByCommentId } from './postListSlice';

type Props = {
    postId: number;
    comments: UserActions[];
    canLoadMore: boolean;
    loadMore: () => void;
};

const CommentList = ({ postId, loadMore, canLoadMore, comments }: Props) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const handleFetchReply = useCallback((commentId: number) => {
        dispatch(getRepliesByCommentId(postId, commentId));
    }, []);

    if (!!!comments?.length) return null;
    return (
        <ul className="comment-list">
            {map(comments, (c) => (
                <React.Fragment key={c.id}>
                    <Comment
                        onGetReplies={() => handleFetchReply(c.id)}
                        data={c}
                    />
                    {map(c?.replies ?? [], (i) => (
                        <Comment isChild key={i.id} data={i} />
                    ))}
                </React.Fragment>
            ))}
            {canLoadMore && (
                <Text
                    onClick={loadMore}
                    size="middle"
                    className="comment-list__load-more"
                >
                    {t('components.post_card.view_more_comment')}
                </Text>
            )}
        </ul>
    );
};

export default React.memo(CommentList);
