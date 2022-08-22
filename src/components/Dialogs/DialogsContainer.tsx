import {
    addMessageAC as sendMessage,
    DialogsInitialStateType
} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {compose, Dispatch} from 'redux';
import WithAuthRedirect from '../../hoc/WithAuthRedirect';
import React from 'react';

type MapStateToPropsType = {
    dialogsPage: DialogsInitialStateType
}

type MapDispatchToPropsType = {
    sendMessage: (message: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: (message: string) => {
            dispatch(sendMessage(message))
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