import {
    AddMessageActionType,
    AllActionsType,
    DialogsPageType,
    MessageItemPropsType,
    UpdateNewMessageTextActionType
} from '../Types';

const dialogsReducer = (state: DialogsPageType, action: AllActionsType) => {

    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newText
            break;
        case 'ADD-MESSAGE':
            const newMessage: MessageItemPropsType = {
                id: state.messages.length + 1,
                text: state.newMessageText
            }

            state.messages.push(newMessage)
            state.newMessageText = ''
            break;
    }

    return state
}

export const updateNewMessageTextActionCreator = (newText: string): UpdateNewMessageTextActionType => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newText: newText
    }
}

export const addMessageActionCreator = (): AddMessageActionType => {
    return {
        type: 'ADD-MESSAGE'
    }
}

export default dialogsReducer;