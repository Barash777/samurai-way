import React from 'react';
// import css from './Sidebar.module.css';
import {NavLink} from 'react-router-dom';
import {
    MessageOutlined, ProfileOutlined, TeamOutlined
} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Menu} from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem(<NavLink to="/profile">Profile</NavLink>, '1', <ProfileOutlined/>),
    getItem(<NavLink to="/dialogs">Messages</NavLink>, '2', <MessageOutlined/>),
    getItem(<NavLink to="/users">Users</NavLink>, '3', <TeamOutlined/>),
];

function Sidebar() {

    return (
        <nav>
            <Menu
                mode={'inline'}
                theme="light"
                items={items}
            />
        </nav>
    );
}

export default Sidebar;