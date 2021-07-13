import React, { ReactNode } from 'react';
import FriendSider from './FriendSider';
import Header from './Header';
import MenuSider from './MenuSider';
import './styles.scss';

type Props = {
    children: ReactNode;
};

const AppLayout = ({ children }: Props) => {
    return (
        <div className="layout">
            <Header />
            <div className="main">
                <div className="left-sider">
                    <MenuSider />
                </div>
                <div className="content-wrapper">
                    <div className="content-main">{children}</div>
                </div>
                <div className="right-sider">
                    <FriendSider />
                </div>
            </div>
        </div>
    );
};

export default AppLayout;
