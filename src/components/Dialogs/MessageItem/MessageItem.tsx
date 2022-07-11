import css from '../Dialogs.module.css';
import React from 'react';
import {MessageItemType} from '../../../redux/dialogsReducer';


export const MessageItem = (props: MessageItemType) => {
    return (
        <div key={props.id} className={css.messageItem}>
            {props.text}
        </div>
    )
}