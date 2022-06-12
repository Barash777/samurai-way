import css from '../Dialogs.module.css';
import React from 'react';
import {MessageItemPropsType} from '../../../Types';


export const MessageItem = (props: MessageItemPropsType) => {
    return (
        <div key={props.id} className={css.messageItem}>
            {props.text}
        </div>
    )
}