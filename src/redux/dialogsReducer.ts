export type MessageItemType = {
    text: string,
    id: number
}

export type DialogItemType = {
    name: string,
    id: number
}

const initialState = {
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
    ] as Array<DialogItemType>,
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
    ] as Array<MessageItemType>,
    newMessageText: ''
}

export type DialogsInitialStateType = typeof initialState

const dialogsReducer = (state: DialogsInitialStateType = initialState, action: DialogsUnionACType): DialogsInitialStateType => {

    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {...state, newMessageText: action.newText}
        case 'ADD-MESSAGE':
            const newMessage: MessageItemType = {
                id: state.messages.length + 1,
                text: state.newMessageText
            }
            return {...state, messages: [...state.messages, newMessage], newMessageText: ''}
        default:
            return state
    }

}

export type UpdateNewMessageTextACType = ReturnType<typeof updateNewMessageTextAC>
export const updateNewMessageTextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newText: newText
    } as const
}

export type AddMessageACACType = ReturnType<typeof addMessageAC>
export const addMessageAC = () => {
    return {
        type: 'ADD-MESSAGE'
    } as const
}

export type DialogsUnionACType = UpdateNewMessageTextACType | AddMessageACACType

export default dialogsReducer;