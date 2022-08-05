// import React from 'react';
import {addMessageAC, DialogsInitialStateType, updateNewMessageTextAC} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';


/*const DialogsContainer = () => {
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
};*/

type MapStateToPropsType = {
    dialogsPage: DialogsInitialStateType
    newMessageText: string
    isAuth: boolean
}

type MapDispatchToPropsType = {
    onChangeMessage: (text: string) => void
    sendMessage: () => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: /*DispatchType*/ Dispatch): MapDispatchToPropsType => {
    return {
        onChangeMessage: (text: string) => {
            dispatch(updateNewMessageTextAC(text))
        },
        sendMessage: () => {
            dispatch(addMessageAC())
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;