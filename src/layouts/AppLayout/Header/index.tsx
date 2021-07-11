import { SVGS } from 'assets';
import React from 'react';
import './styles.scss';

const Header = () => {
    return (
        <div className="app-header">
            <div className="app-brand">
                <img src={SVGS.game} alt="logo" />
                <div className="name">prisma</div>
            </div>
            <div className="main">
                <ul className="menu">
                    <li className="menu-item">Home</li>
                    <li className="menu-item"></li>
                    <li className="menu-item"></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
