import { SVGS } from 'assets';
import { Setting } from 'assets/icons';
import clsx from 'clsx';
import React from 'react';
import Search from './Search';
import './styles.scss';

type Props = {
    isCollapse?: boolean;
};

const Header = ({ isCollapse }: Props) => {
    return (
        <div
            className={clsx(
                'app-header',
                isCollapse && 'app-header--collapsed',
            )}
        >
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
            <div className="setting">
                <Setting className="icon" size={20} color="#fff" />
            </div>
        </div>
    );
};

export default Header;
