import {
    AddMessageActionType,
    AddPostActionType, MessageItemPropsType,
    PostPropsType,
    StoreType,
    UpdateNewMessageTextActionType,
    UpdateNewPostTextActionType
} from '../Types';


let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: 'Hello',
                    likeCount: 12
                },
                {
                    id: 2,
                    message: 'Wow',
                    likeCount: 25
                },
                {
                    id: 3,
                    message: 'OK',
                    likeCount: 37
                },
                {
                    id: 4,
                    message: 'From state',
                    likeCount: 101
                }
            ],
            newPostText: '',
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    // addPost() {
    //     const newPost: PostPropsType = {
    //         id: this._state.profilePage.posts.length + 1,
    //         // message: postMessage,
    //         message: this._state.profilePage.newPostText,
    //         likeCount: 0
    //     }
    //
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.newPostText = ''
    //     this._callSubscriber()
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText
    //     this._callSubscriber()
    // },

    dispatch(action) { // type is required
        if (action.type === 'ADD-POST') {
            const newPost: PostPropsType = {
                id: this._state.profilePage.posts.length + 1,
                // message: postMessage,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }

            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT'/* && (action.newText || action.newText === '')*/) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newText
            this._callSubscriber()
        } else if (action.type === 'ADD-MESSAGE') {

            const newMessage: MessageItemPropsType = {
                id: this._state.dialogsPage.messages.length + 1,
                text: this._state.dialogsPage.newMessageText
            }

            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber()
        }
    }
}

export default store

// create TYPE based on fn return
/*
export type testType = ReturnType<typeof testFn>
export const testFn = (text: string, age: number) => {
    return {
        type: 'ADD-POST',
        text: text,
        age: age
    } as const
}
*/

export const addPostActionCreator = (): AddPostActionType => {
    return {
        type: 'ADD-POST'
    }
}

export const updateNewPostTextActionCreator = (newText: string): UpdateNewPostTextActionType => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    }
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