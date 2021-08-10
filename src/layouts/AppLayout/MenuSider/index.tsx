import { IMAGES } from 'assets';
import clsx from 'clsx';
import { Avatar, FlexGrow, Text } from 'components';
import { authSelector, logout } from 'features/auth/authSlice';
import i18n from 'i18n';
import { map } from 'lodash';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BiExpand, BiLogOut, BiNews } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { INavigationItem } from 'schema';
import './styles.scss';

const items: INavigationItem[] = [
    {
        name: 'layout.sidebar.newsfeed',
        path: '/',
        icon: <BiNews className="icon" />,
    },
    {
        name: 'layout.sidebar.logout',
        path: '/logout',
        icon: <BiLogOut className="icon" />,
    },
];

const _renderItems = (pathname: string) => {
    return (
        <ul className="menu-list">
            {map(items, (i) => (
                <a href={i.path}>
                    <li
                        className={clsx(
                            'item',
                            i.path === pathname && 'item--active',
                        )}
                    >
                        {i.icon}
                        {i18n.t(i.name)}
                    </li>
                </a>
            ))}
        </ul>
    );
};

type Props = {
    isCollapse?: boolean;
    handleToggleCollapse?: () => void;
};

const MenuSider = ({ isCollapse, handleToggleCollapse }: Props) => {
    const dispatch = useDispatch();
    const { user } = useSelector(authSelector);
    const { pathname } = useLocation();
    const { t } = useTranslation();

    const handleLogout = async () => {
        dispatch(logout());
    };
    console.log(user);
    return (
        <div
            className={clsx(
                'menu-sider',
                isCollapse && 'menu-sider--collapsed',
            )}
        >
            <div className="user-profile">
                <div className="cover-img">
                    <img src={IMAGES.mockCover} alt="cover" />
                </div>
                <Avatar
                    src={user?.avatar?.url}
                    className="avatar"
                    size={!isCollapse ? 9 : 5}
                />
                <div className="name-wrapper">
                    <div className="name">{user?.username}</div>
                    <Text size="small" className="website">
                        www.prisma.com
                    </Text>
                </div>
            </div>
            <ul className="menu-list">
                <Link
                    to="/"
                    className={clsx('item', pathname === '/' && 'item--active')}
                >
                    <BiNews className="icon" />
                    <span>{t('layout.sidebar.newsfeed')}</span>
                </Link>
                <Link to="#" onClick={handleLogout} className="item">
                    <BiLogOut className="icon" />
                    <span>{t('layout.sidebar.logout')}</span>
                </Link>
            </ul>
            {/* {_renderItems(pathname)} */}
            <FlexGrow />
            <div onClick={handleToggleCollapse} className="collapse-btn">
                <BiExpand className="icon" />
            </div>
        </div>
    );
};

export default MenuSider;
