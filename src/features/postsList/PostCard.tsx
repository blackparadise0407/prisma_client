import { Post } from 'api/_apis/post';
import { Anger, Laugh, Sad } from 'assets/icons';
import clsx from 'clsx';
import { Avatar, Divider, Text } from 'components';
import { map } from 'lodash';
import React from 'react';
import {
    AiOutlineComment,
    AiOutlineLike,
    AiOutlineShareAlt,
} from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import moment from 'utils/moment';
import './PostCard.scss';

type Props = {
    data?: Post;
    loading?: boolean;
};

const PostCard = ({ data, loading }: Props) => {
    if (!data) return null;

    const { content, photos, userId, createdAt } = data;

    return (
        <div className="card">
            <div className="card__header">
                <div className="user">
                    <Avatar size={5} src={userId.avatar} />
                    <div className="info">
                        <Text size="small" className="name">
                            {userId.username}
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
                {photos.length ? (
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
                ) : null}

                <Divider width="calc(100% - 4rem)" />
                <div className="reactions">
                    <div className="reaction-wrapper">
                        <div className="reaction-list">
                            <Laugh size={25} className="reaction" />
                            <Anger size={25} className="reaction" />
                            <Sad size={25} className="reaction" />
                        </div>
                        <Text size="middle" className="number">
                            20
                        </Text>
                    </div>
                    <div className="comment-wrapper">
                        <div className="item comments">3 Comment</div>
                        <div className="item share">2 Share</div>
                    </div>
                </div>
                <Divider />
                <div className="actions">
                    <div className="action-item">
                        <AiOutlineLike className="icon" />
                        Like
                    </div>
                    <div className="action-item">
                        <AiOutlineComment className="icon" />
                        Comment
                    </div>
                    <div className="action-item">
                        <AiOutlineShareAlt className="icon" />
                        Share
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
