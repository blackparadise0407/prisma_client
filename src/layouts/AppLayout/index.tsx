import clsx from 'clsx';
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
            <div className="layout__header">
                <Header isCollapse={isCollapse} />
            </div>
            <div className="layout__main">
                <div className="layout__left-sider">
                    <MenuSider
                        handleToggleCollapse={handleToggleCollapse}
                        isCollapse={isCollapse}
                    />
                </div>
                <div
                    className={clsx(
                        'layout__content-wrapper',
                        isCollapse && 'layout__content-wrapper--collapsed',
                    )}
                >
                    {children}
                </div>
                <div className="layout__right-sider">
                    <FriendSider />
                </div>
            </div>
        </div>
    );
};

export default AppLayout;
