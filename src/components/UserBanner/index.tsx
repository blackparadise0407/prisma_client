import { IMAGES } from 'assets';
import Avatar from 'components/Avatar';
import { authSelector } from 'features/auth/authSlice';
import React from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';

const UserBanner = () => {
    const { user } = useSelector(authSelector);
    if (!user) return null;
    return (
        <div className="user-banner">
            <div className="cover">
                <img src={IMAGES.mockCover} alt="cover" />
            </div>
            <div className="info">
                <div className="user">
                    <Avatar size={14} src={user?.avatar} />
                </div>
            </div>
        </div>
    );
};

export default UserBanner;
