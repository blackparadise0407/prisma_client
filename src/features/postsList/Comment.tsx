import { Avatar, Text } from 'components';
import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { User } from 'schema';
import './Comment.scss';

type Props = {
    comment?: string;
    user?: User;
};

const Comment = ({ comment, user }: Props) => {
    return (
        <div className="comment">
            <div className="comment__user">
                <Avatar src={undefined} size={4} />
            </div>
            <div className="comment__main">
                <div className="comment__body">
                    <div className="container">
                        <Text className="username">Kyle</Text>
                        <Text
                            className="content"
                            size="small"
                            // collapsible={Math.random() > 0.5}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </Text>
                    </div>
                    <div className="action">
                        <BsThreeDots />
                    </div>
                </div>
                <div className="comment__footer"></div>
            </div>
        </div>
    );
};

export default React.memo(Comment);
