import { Post } from 'api/_apis/post';
import { Avatar, Text } from 'components';
import { BsThreeDots } from 'react-icons/bs';
import React from 'react';
import moment from 'utils/moment';
import './PostCard.scss';
import { map } from 'lodash';
import clsx from 'clsx';

type Props = {
    data?: Post;
    loading?: boolean;
};

const PostCard = ({ data, loading }: Props) => {
    if (!data) return null;

    const { content, photos, userId, createdAt } = data;

    return (
        <div className="post-card">
            <div className="header">
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
            <div className="body">
                <Text collapsible={content.length > 100} className="content">
                    {content}
                </Text>
                {photos.length ? (
                    <div className="photos">
                        {map(photos, (p, idx) => {
                            if (idx <= 3) {
                                return (
                                    <img
                                        className={clsx(
                                            photos.length > 1 && 'photo--two',
                                            photos.length > 3 && 'photo--three',
                                        )}
                                        src={p.url}
                                        alt="img"
                                    />
                                );
                            } else return null;
                        })}
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default PostCard;
