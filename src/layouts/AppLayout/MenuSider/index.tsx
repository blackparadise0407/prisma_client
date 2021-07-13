import { IMAGES } from 'assets';
import { Avatar } from 'components';
import { authSelector } from 'features/auth/authSlice';
import React from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';

const MenuSider = () => {
    const { user } = useSelector(authSelector);
    return (
        <div className="menu-sider">
            <div className="user-profile">
                <div className="cover-img">
                    <img src={IMAGES.mockCover} alt="cover" />
                </div>
                <Avatar src={user?.avatar} className="avatar" size={9} />
                <div className="name-wrapper">
                    <div className="name">{user?.username}</div>
                    <div className="website">www.prisma.com</div>
                </div>
            </div>
        </div>
    );
};

export default MenuSider;
