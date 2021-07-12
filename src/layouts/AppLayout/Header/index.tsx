import { SVGS } from 'assets';
import React from 'react';
import Search from './Search';
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
                    <li className="menu-item">Contact</li>
                    <li className="menu-item">FAQs</li>
                </ul>
                <Search />
            </div>
        </div>
    );
};

export default Header;
