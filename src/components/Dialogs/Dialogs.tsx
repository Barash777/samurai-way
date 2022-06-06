import React from 'react';
import css from './Dialogs.module.css'
import {DialogItem, DialogItemPropsType} from './DialogItem/DialogItem';
import {MessageItem, MessageItemPropsType} from './MessageItem/MessageItem';


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

    const dialogsJSX = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesJSX = messagesData.map(m => <MessageItem text={m.text} id={m.id}/>)

    return (
        <div className={css.dialogsPage}>
            <div className={css.dialogs}>
                {dialogsJSX}
            </div>
            <div className={css.messages}>
                {messagesJSX}
            </div>
        </div>
    );
};

export default Dialogs;