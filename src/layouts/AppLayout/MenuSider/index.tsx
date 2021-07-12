import { IMAGES } from 'assets';
import React from 'react';
import './styles.scss';

const MenuSider = () => {
    return (
        <div className="menu-sider">
            <div className="user-profile">
                <div className="bg-img">
                    <img src={IMAGES.rocket} alt="bg" />
                </div>
            </div>
        </div>
    );
};

export default MenuSider;
