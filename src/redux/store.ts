import {StoreType} from '../Types';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';


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

    dispatch(action) { // type is required

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber();
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
