import { Text } from 'components';
import { map } from 'lodash';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { UserActions } from 'schema';
import Comment from './Comment';
import './CommentList.scss';

type Props = {
    comments: UserActions[];
    canLoadMore: boolean;
    loadMore: () => void;
};

const CommentList = ({ loadMore, canLoadMore, comments }: Props) => {
    const { t } = useTranslation();
    if (!!!comments?.length) return null;
    return (
        <ul className="comment-list">
            {map(comments, (c) => (
                <Comment key={c.id} data={c} />
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
