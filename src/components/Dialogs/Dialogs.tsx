import React from 'react';
import css from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

const Dialogs = () => {
    return (
        <div className={css.dialogsPage}>
            <div className={css.dialogs}>
                <div className={css.dialogItem}>
                    <NavLink to={'/dialogs/1'} activeClassName={css.active}>Olga</NavLink>
                </div>
                <div className={css.dialogItem}>
                    <NavLink to={'/dialogs/2'} activeClassName={css.active}>Victor</NavLink>
                </div>
                <div className={css.dialogItem}>
                    <NavLink to={'/dialogs/3'} activeClassName={css.active}>Ilya</NavLink>
                </div>
                <div className={css.dialogItem}>
                    <NavLink to={'/dialogs/4'} activeClassName={css.active}>Anton</NavLink>
                </div>
                <div className={css.dialogItem}>
                    <NavLink to={'/dialogs/5'} activeClassName={css.active}>Elena</NavLink>
                </div>
            </div>
            <div className={css.messages}>
                <div className={css.messageItem}>
                    Hi
                </div>
                <div className={css.messageItem}>
                    Hello
                </div>
                <div className={css.messageItem}>
                    What's up?
                </div>
            </div>
        </div>
    );
};

export default Dialogs;