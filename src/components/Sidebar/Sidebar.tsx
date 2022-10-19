import React from 'react';
import css from './Sidebar.module.css';
import {NavLink} from 'react-router-dom';


function Sidebar() {

    return (
        <nav>
            <div className={css.item}>
                <NavLink to="/profile" className={({isActive}) =>
                    isActive ? css.active : ''
                }>Profile</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/dialogs" className={({isActive}) =>
                    isActive ? css.active : ''
                }>Messages</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/users" className={({isActive}) =>
                    isActive ? css.active : ''
                }>Users</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/news" className={({isActive}) =>
                    isActive ? css.active : ''
                }>News</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/music" className={({isActive}) =>
                    isActive ? css.active : ''
                }>Music</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/settings" className={({isActive}) =>
                    isActive ? css.active : ''
                }>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Sidebar;

/*
у кого в конце 21го не работает activeClassName - необходимо заменить на
className = { navData => navData.isActive ? s.active : s.item }
+ пишем правило в css для .active {color: gold;} + там же переименовываем ".item a" просто в ".item"
<div className={s.item}> тоже можно заменить на просто <div>, от класснэйма тут толку не будет
 */