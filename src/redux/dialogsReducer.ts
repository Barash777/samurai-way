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
    ] as Array<MessageItemType>
}

export type DialogsInitialStateType = typeof initialState

const dialogsReducer = (state: DialogsInitialStateType = initialState, action: DialogsUnionACType): DialogsInitialStateType => {

    switch (action.type) {
        case 'DIALOGS/ADD-MESSAGE':
            const newMessage: MessageItemType = {
                id: state.messages.length + 1,
                text: action.message
            }
            return {...state, messages: [...state.messages, newMessage]}
        default:
            return state
    }

}


export type AddMessageACACType = ReturnType<typeof addMessageAC>
export const addMessageAC = (message: string) => {
    return {
        type: 'DIALOGS/ADD-MESSAGE',
        message
    } as const
}

export type DialogsUnionACType = AddMessageACACType

export default dialogsReducer;