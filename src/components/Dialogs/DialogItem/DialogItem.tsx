import css from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';
import {DialogItemPropsType} from '../../../Types';

export const DialogItem = (props: DialogItemPropsType) => {
    let path = '/dialogs/' + props.id.toString()

    return (
        <div key={props.id} className={css.dialogItem}>
            <NavLink to={path} activeClassName={css.active}>{props.name}</NavLink>
        </div>
    )
}