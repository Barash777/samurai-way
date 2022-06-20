import {PostPropsType, StoreType} from '../Types';


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
            ]
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
        }
    }
}

export default store