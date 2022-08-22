import React from 'react';
import css from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {MessageItem} from './MessageItem/MessageItem';
import {DialogsPropsType} from './DialogsContainer';
import MessageForm from '../Forms/MessageForm/MessageForm';


const Dialogs = (props: DialogsPropsType) => {

    const dialogsData = props.dialogsPage.dialogs;
    const messagesData = props.dialogsPage.messages;

    const dialogsJSX = dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messagesJSX = messagesData.map(m => <MessageItem key={m.id} text={m.text} id={m.id}/>)

    const sendMessageHandler = (message: string) => {
        props.sendMessage(message)
    }

    return (
        <div className={css.dialogsPage}>
            <div className={css.dialogs}>
                {dialogsJSX}
            </div>
            <div className={css.messages}>
                <div>
                    {messagesJSX}
                </div>
                <MessageForm sendMessage={sendMessageHandler}/>
            </div>

        </div>
    );
};

export default Dialogs;