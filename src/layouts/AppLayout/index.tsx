import React, { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';
import './styles.scss';

type Props = {
    children: ReactNode;
};

const AppLayout = ({ children }: Props) => {
    return (
        <div className="layout">
            <Header />
            <div className="main">
                <div className="left-sider"></div>
                <div className="child">{children}</div>
                <div className="right-sider"></div>
            </div>
        </div>
    );
};

export default AppLayout;
