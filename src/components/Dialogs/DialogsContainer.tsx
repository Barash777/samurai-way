// import React from 'react';
import {
    addMessageAC as sendMessage,
    DialogsInitialStateType,
    updateNewMessageTextAC as onChangeMessage
} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {compose, Dispatch} from 'redux';
import WithAuthRedirect from '../../hoc/WithAuthRedirect';
import React from 'react';


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
}

type MapDispatchToPropsType = {
    onChangeMessage: (text: string) => void
    sendMessage: () => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onChangeMessage: (text: string) => {
            dispatch(onChangeMessage(text))
        },
        sendMessage: () => {
            dispatch(sendMessage())
        },
    }
}

/*const mapDispatchToProps = () => {
    return {
        onChangeMessage,
        sendMessage
    }
}*/

// const DialogsContainer = WithAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)
(Dialogs)