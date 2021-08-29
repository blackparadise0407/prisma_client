import { Avatar, Text } from 'components';
import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { UserActions } from 'schema';
import moment from 'utils/moment';
import './Comment.scss';

type Props = {
    data: UserActions;
};

const Comment = ({ data }: Props) => {
    if (!!!data) return null;

    const { id, content, user, createdAt } = data;

    return (
        <div className="comment">
            <div className="comment__user">
                <Avatar src={user?.avatar?.url} size={4} />
            </div>
            <div className="comment__main">
                <div className="comment__body">
                    <div className="container">
                        <Text className="username">{user?.username}</Text>
                        <Text
                            className="content"
                            size="small"
                            // collapsible={Math.random() > 0.5}
                        >
                            {content}
                        </Text>
                    </div>
                    <div className="action">
                        <BsThreeDots />
                    </div>
                </div>
                <div className="comment__footer">
                    {moment(createdAt).fromNow()}
                </div>
            </div>
        </div>
    );
};

export default React.memo(Comment);
