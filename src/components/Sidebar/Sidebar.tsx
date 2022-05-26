import React from 'react';
import css from './Sidebar.module.css';

function Sidebar() {
    return (
        <nav className={css.sidebar}>
            <div className={`${css.item} ${css.active}`}>
                <a>Profile</a>
            </div>
            <div className={css.item}>
                <a>Messages</a>
            </div>
            <div className={css.item}>
                <a>News</a>
            </div>
            <div className={css.item}>
                <a>Music</a>
            </div>
            <div className={css.item}>
                <a>Settings</a>
            </div>
        </nav>
    );
}

export default Sidebar;