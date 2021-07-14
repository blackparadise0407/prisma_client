import React, { ReactNode, useState } from 'react';
import FriendSider from './FriendSider';
import Header from './Header';
import MenuSider from './MenuSider';
import './styles.scss';

type Props = {
    children: ReactNode;
};

const AppLayout = ({ children }: Props) => {
    const [isCollapse, setIsCollapse] = useState<boolean>(
        window.innerWidth < 960,
    );

    const handleToggleCollapse = () => {
        setIsCollapse(!isCollapse);
    };

    return (
        <div className="layout">
            <Header isCollapse={isCollapse} />
            <div className="main">
                <div className="left-sider">
                    <MenuSider
                        handleToggleCollapse={handleToggleCollapse}
                        isCollapse={isCollapse}
                    />
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
