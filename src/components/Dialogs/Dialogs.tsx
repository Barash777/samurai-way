import React, {ChangeEvent} from 'react';
import css from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {MessageItem} from './MessageItem/MessageItem';
import {DialogsPropsType} from './DialogsContainer';
// import {DialogsPropsType} from '../../Types';


const Dialogs = (props: DialogsPropsType) => {

    const dialogsData = props.dialogsPage.dialogs;
    const messagesData = props.dialogsPage.messages;

    const dialogsJSX = dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messagesJSX = messagesData.map(m => <MessageItem key={m.id} text={m.text} id={m.id}/>)

    const sendMessageHandler = () => {
        props.sendMessage()
    }

    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.onChangeMessage(text)
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
                <div>
                    <div>
                        <textarea
                            onChange={onChangeMessageHandler}
                            value={props.newMessageText}
                        />
                    </div>
                    <div>
                        <button onClick={sendMessageHandler}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;