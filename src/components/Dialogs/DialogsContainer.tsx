import React from 'react';
import {addMessageAC, updateNewMessageTextAC} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';


const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {

                let state = store.getState();

                const sendMessageHandler = () => {
                    store.dispatch(addMessageAC())
                }

                const onChangeHandler = (text: string) => {
                    store.dispatch(updateNewMessageTextAC(text))
                }

                return (
                    <Dialogs
                        dialogsPage={state.dialogsPage}
                        newMessageText={state.dialogsPage.newMessageText}
                        onChangeMessage={onChangeHandler}
                        sendMessage={sendMessageHandler}
                    />
                )
            }}
        </StoreContext.Consumer>
    )
};

export default DialogsContainer;