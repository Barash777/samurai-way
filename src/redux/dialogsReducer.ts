import {
    AddMessageActionType,
    AllActionsType,
    DialogsPageType,
    MessageItemPropsType,
    UpdateNewMessageTextActionType
} from '../Types';

const initialState: DialogsPageType = {
    dialogs: [
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
    ],
    messages: [
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
        },
        {
            id: 5,
            text: 'From state',
        }
    ],
    newMessageText: ''
}

const dialogsReducer = (state: DialogsPageType = initialState, action: AllActionsType): DialogsPageType => {

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

export const updateNewMessageTextAC = (newText: string): UpdateNewMessageTextActionType => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newText: newText
    }
}

export const addMessageAC = (): AddMessageActionType => {
    return {
        type: 'ADD-MESSAGE'
    }
}

export default dialogsReducer;