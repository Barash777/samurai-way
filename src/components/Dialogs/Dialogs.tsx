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
        <div key={props.id} className={css.dialogItem}>
            <NavLink to={path} activeClassName={css.active}>{props.name}</NavLink>
        </div>
    )
}


type MessageItemPropsType = {
    text: string,
    id: number
}

const MessageItem = (props: MessageItemPropsType) => {
    return (
        <div key={props.id} className={css.messageItem}>
            {props.text}
        </div>
    )
}


const Dialogs = () => {

    let dialogsData: Array<DialogItemPropsType> = [
        {
            name: 'Olga',
            id: 1
        },
        {
            name: 'Victor',
            id: 2
        },
        {
            name: 'Ilya',
            id: 3
        },
        {
            name: 'Anton',
            id: 4
        },
        {
            name: 'Elena',
            id: 5
        }
    ]

    let messagesData: Array<MessageItemPropsType> = [
        {
            id: 1,
            text: 'Hi',
        },
        {
            id: 2,
            text: 'Hey',
        },
        {
            id: 3,
            text: 'Stop it!',
        },
        {
            id: 4,
            text: 'What\'s up!',
        }
    ]

    return (
        <div className={css.dialogsPage}>
            <div className={css.dialogs}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name="Anton" id={4}/>
                <DialogItem name="Elena" id={5}/>
            </div>
            <div className={css.messages}>
                <MessageItem text={messagesData[0].text} id={messagesData[0].id}/>
                <MessageItem text={messagesData[1].text} id={messagesData[1].id}/>
                <MessageItem text={messagesData[2].text} id={messagesData[2].id}/>
                <MessageItem text={messagesData[3].text} id={messagesData[3].id}/>
            </div>
        </div>
    );
};

export default Dialogs;