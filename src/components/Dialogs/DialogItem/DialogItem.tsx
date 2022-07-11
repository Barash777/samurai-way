import css from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';
import {DialogItemType} from '../../../redux/dialogsReducer';

export const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id.toString()

    return (
        <div key={props.id} className={css.dialogItem}>
            <NavLink to={path} className={({isActive}) =>
                isActive ? css.active : ''
            }>{props.name}</NavLink>
        </div>
    )
}