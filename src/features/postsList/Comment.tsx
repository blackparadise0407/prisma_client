import { Avatar, Button, Text } from 'components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineEnter } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { UserActions } from 'schema';
import moment from 'utils/moment';
import './Comment.scss';

type Props = {
    data: UserActions;
    onGetReplies: (commentId: number) => void;
};

const Comment = ({ data, onGetReplies }: Props) => {
    const { t } = useTranslation();
    if (!!!data) return null;

    const { id, content, user, createdAt, replyCount } = data;

    const handleLoadReply = () => {
        onGetReplies && onGetReplies(id);
    };

    return (
        <React.Fragment>
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
                                collapsible={content?.length > 300}
                            >
                                {content}
                            </Text>
                        </div>
                        <div className="action">
                            <BsThreeDots />
                        </div>
                    </div>
                    <div className="comment__footer">
                        <span>{t('components.post_card.comment_reply')}</span>
                        <span className="time">
                            {moment(createdAt).fromNow()}
                        </span>
                    </div>
                    {/* {replyCount ? (
                        <Text size="small" className="comment__see-reply">
                            View {replyCount} replies
                        </Text>
                    ) : null} */}
                </div>
                {/* {replyCount ? (
                    <Button
                        className="comment__see-reply"
                        icon={<AiOutlineEnter />}
                    >
                        {t('components.post_card.view_replies', { replyCount })}
                    </Button>
                ) : null} */}
            </div>
            {replyCount ? (
                <Text
                    onClick={handleLoadReply}
                    size="small"
                    className="see-reply"
                >
                    View {replyCount} replies
                </Text>
            ) : null}
        </React.Fragment>
    );
};

export default React.memo(Comment);
