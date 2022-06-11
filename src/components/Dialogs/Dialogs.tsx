import React from 'react';
import css from './Dialogs.module.css'
import {DialogItem, DialogItemPropsType} from './DialogItem/DialogItem';
import {MessageItem, MessageItemPropsType} from './MessageItem/MessageItem';
import {DialogsPageType} from '../../redux/state';
// import state from '../../redux/state';

/*type DialogsPropsType = {
    dialogsData: Array<DialogItemPropsType>
    messagesData: Array<MessageItemPropsType>
}*/

type DialogsPropsType = {
    dialogsPage: DialogsPageType
}

const Dialogs = (props: DialogsPropsType) => {

    //const dialogsData: Array<DialogItemPropsType> = state.dialogsPage.dialogs;
    //const messagesData: Array<MessageItemPropsType> = state.dialogsPage.messages;

    const dialogsData = props.dialogsPage.dialogs;
    const messagesData = props.dialogsPage.messages;

    const dialogsJSX = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesJSX = messagesData.map(m => <MessageItem text={m.text} id={m.id}/>)

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