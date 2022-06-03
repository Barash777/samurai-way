import React from 'react';
import css from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogItemPropsType = {
    name: string,
    id: number
}

const DialogItem = (props: DialogItemPropsType) => {
    let path = '/dialogs/' + props.id.toString()

    return (
        <div className={css.dialogItem}>
            <NavLink to={path} activeClassName={css.active}>{props.name}</NavLink>
        </div>
    )
}


type MessageItemPropsType = {
    text: string
}

const MessageItem = (props: MessageItemPropsType) => {
    return (
        <div className={css.messageItem}>
            {props.text}
        </div>
    )
}


const Dialogs = () => {
    return (
        <div className={css.dialogsPage}>
            <div className={css.dialogs}>
                <DialogItem name="Olga" id={1}/>
                <DialogItem name="Victor" id={2}/>
                <DialogItem name="Ilya" id={3}/>
                <DialogItem name="Anton" id={4}/>
                <DialogItem name="Elena" id={5}/>
            </div>
            <div className={css.messages}>
                <MessageItem text={'Hi'}/>
                <MessageItem text={'Hello'}/>
                <MessageItem text={'What\'s up?'}/>
                <MessageItem text={'It\'s my last message!'}/>
            </div>
        </div>
    );
};

export default Dialogs;