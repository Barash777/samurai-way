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
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('state changed')
    },
    addPost() {
        const newPost: PostPropsType = {
            id: this._state.profilePage.posts.length + 1,
            // message: postMessage,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        }

        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber()
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber()
    },
    subscribe(observer) {
        this._callSubscriber = observer
    }
}

export default store