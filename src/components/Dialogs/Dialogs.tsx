import React from 'react';
import css from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {MessageItem} from './MessageItem/MessageItem';
import {DialogsPropsType} from '../../Types';


const Dialogs = (props: DialogsPropsType) => {

    //const dialogsData: Array<DialogItemPropsType> = state.dialogsPage.dialogs;
    //const messagesData: Array<MessageItemPropsType> = state.dialogsPage.messages;

    const dialogsData = props.dialogsPage.dialogs;
    const messagesData = props.dialogsPage.messages;

    const dialogsJSX = dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messagesJSX = messagesData.map(m => <MessageItem key={m.id} text={m.text} id={m.id}/>)

    const textAreaRef = React.createRef<HTMLTextAreaElement>();

    const sendMessage = () => {
        alert(textAreaRef.current?.value)
    }

    return (
        <div className={css.dialogsPage}>
            <div className={css.dialogs}>
                {dialogsJSX}
            </div>
            <div className={css.messages}>
                {messagesJSX}
            </div>
            <div>
                <textarea ref={textAreaRef}></textarea>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Dialogs;