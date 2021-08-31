import { Anger, Laugh, Love, Sad, Shock } from 'assets/icons';
import clsx from 'clsx';
import { Avatar, Divider, FlexGrow, Spin, Text } from 'components';
import i18n from 'i18n';
import { map } from 'lodash';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
    AiOutlineComment,
    AiOutlineLike,
    AiOutlineShareAlt,
} from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Post, ReactionType } from 'schema';
import moment from 'utils/moment';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import './PostCard.scss';
import {
    selectCanLoadMoreById,
    selectEnitityStatusById,
} from './postListSelector';
import { fetchCommentByPostId, loadMoreCommentByPostId } from './postListSlice';

type Props = {
    data?: Post;
    loading?: boolean;
};

const _renderReactions = (
    reactionType: ReactionType,
    agrs: any = {},
): JSX.Element => {
    switch (reactionType) {
        case ReactionType.LIKE:
            return <Anger size={24} {...agrs} />;
        case ReactionType.LOVE:
            return <Love size={24} {...agrs} />;
        case ReactionType.HAHA:
            return <Laugh size={24} {...agrs} />;
        case ReactionType.SAD:
            return <Sad size={24} {...agrs} />;
        case ReactionType.ANGER:
            return <Anger size={24} {...agrs} />;
        case ReactionType.WOW:
            return <Shock size={24} {...agrs} />;
        default:
            return null;
    }
};

const _renderReactionText = (reactionType: ReactionType): string => {
    switch (reactionType) {
        case ReactionType.LIKE:
            return i18n.t('reaction.like');
        case ReactionType.LOVE:
            return i18n.t('reaction.love');
        case ReactionType.HAHA:
            return i18n.t('reaction.haha');
        case ReactionType.SAD:
            return i18n.t('reaction.sad');
        case ReactionType.ANGER:
            return i18n.t('reaction.angry');
        case ReactionType.WOW:
            return i18n.t('reaction.wow');
        default:
            return '';
    }
};

// const _renderCommentList = (comments: UserActions[] = []): JSX.Element => {
//     if (!comments.length) return <></>;
//     return (
//         <ul>
//             {map(comments, (c) => (
//                 <Comment key={c.id} data={c} />
//             ))}
//         </ul>
//     );
// };

const PostCard = ({ data, loading }: Props) => {
    const {
        id,
        content,
        user,
        createdAt,
        reactionCount,
        commentCount,
        shareCount,
        reactions,
        userActions,
        comments,
    } = data;

    const { t } = useTranslation();
    const dispatch = useDispatch();

    const entityStatus = useSelector(selectEnitityStatusById(id));

    const entityCanLoadMore = useSelector(selectCanLoadMoreById(id));

    const handleFetchComment = useCallback(() => {
        if (!!!comments?.length) dispatch(fetchCommentByPostId(id));
    }, [comments?.length, id]);

    const handleFetchMoreComment = useCallback(() => {
        dispatch(loadMoreCommentByPostId(id));
    }, [id]);

    if (!data) return null;

    return (
        <div className="card">
            <div className="card__header">
                <div className="user">
                    <Avatar size={5} src={user?.avatar?.url} />
                    <div className="info">
                        <Text size="small" className="name">
                            {user.username}
                        </Text>
                        <Text size="small" className="created-at">
                            {moment(createdAt).fromNow()}
                        </Text>
                    </div>
                </div>
                <BsThreeDots className="action" />
            </div>
            <div className="card__body">
                <Text collapsible={content.length > 100} className="content">
                    {content}
                </Text>
                {/* {photos.length ? (
                    <div className="photos">
                        {map(photos, (p, idx) => {
                            if (idx <= 3) {
                                return (
                                    <img
                                        key={p.id}
                                        className={clsx(
                                            'photo',
                                            photos.length > 1 && 'photo--two',
                                            photos.length > 2 && 'photo--three',
                                            photos.length > 3 && 'photo--four',
                                        )}
                                        src={p.url}
                                        alt="img"
                                    />
                                );
                            } else return null;
                        })}
                    </div>
                ) : null} */}

                {/* <Divider width="calc(100% - 4rem)" /> */}
                <div className="reactions">
                    {reactionCount ? (
                        <div className="reaction-wrapper">
                            <div className="reaction-list">
                                {/* <Laugh size={24} className="reaction" />
                                <Anger size={24} className="reaction" />
                                <Sad size={24} className="reaction" /> */}
                                {map(reactions, (i, idx) => {
                                    if (idx > 2) return null;
                                    else {
                                        return (
                                            <React.Fragment key={idx}>
                                                {_renderReactions(
                                                    i.reactionType,
                                                    {
                                                        className: 'reaction',
                                                    },
                                                )}
                                            </React.Fragment>
                                        );
                                    }
                                })}
                            </div>
                            <Text size="middle" className="number">
                                {`${reactionCount}`}
                            </Text>
                        </div>
                    ) : null}
                    <FlexGrow />
                    <div className="comment-wrapper">
                        {commentCount ? (
                            <div className="item comments">{`${commentCount} ${t(
                                'components.post_card.comment',
                            )}`}</div>
                        ) : null}
                        {shareCount ? (
                            <div className="item share">{`${shareCount} ${t(
                                'components.post_card.share',
                            )}`}</div>
                        ) : null}
                    </div>
                </div>
                {/* <Divider /> */}
                <div className="actions">
                    <div className="action-item">
                        {/* <AiOutlineLike className="icon" /> */}
                        {userActions.length ? (
                            <React.Fragment>
                                <AiOutlineLike className="icon" />
                                <span>
                                    {_renderReactionText(
                                        userActions[0].reactionType,
                                    )}
                                </span>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <AiOutlineLike className="icon" />
                                <span>React!</span>
                            </React.Fragment>
                        )}
                    </div>
                    <div
                        onClick={handleFetchComment}
                        className={clsx(
                            'action-item',
                            !!comments?.length && 'action-item--active',
                        )}
                    >
                        {entityStatus === 'loading' ? (
                            <Spin className="icon" />
                        ) : (
                            <AiOutlineComment className="icon" />
                        )}
                        Comment
                    </div>
                    <div className="action-item">
                        <AiOutlineShareAlt className="icon" />
                        Share
                    </div>
                </div>
            </div>
            <div className="card__comment">
                <Divider />
                {/* {_renderCommentList(comments)} */}
                <CommentList
                    postId={id}
                    loadMore={handleFetchMoreComment}
                    canLoadMore={entityCanLoadMore}
                    comments={comments}
                />
                <CommentInput />
            </div>
        </div>
    );
};

export default PostCard;
