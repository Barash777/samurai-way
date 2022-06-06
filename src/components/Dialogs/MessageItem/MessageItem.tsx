import css from '../Dialogs.module.css';
import React from 'react';

export type MessageItemPropsType = {
    text: string,
    id: number
}
export const MessageItem = (props: MessageItemPropsType) => {
    return (
        <div key={props.id} className={css.messageItem}>
            {props.text}
        </div>
    )
}