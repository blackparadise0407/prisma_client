import { IMAGES } from 'assets';
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
                <div className="avatar-wrapper">
                    <div className="avatar">
                        {user?.avatar ? (
                            <img src={user?.avatar} alt="avatar" />
                        ) : (
                            'Fake avatar'
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuSider;
