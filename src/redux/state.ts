import {PostPropsType} from '../components/Profile/MyPosts/Post/Post';
import {DialogItemPropsType} from '../components/Dialogs/DialogItem/DialogItem';
import {MessageItemPropsType} from '../components/Dialogs/MessageItem/MessageItem';
import {rerenderEntireTree} from '../render';

export type ProfilePageType = {
    posts: Array<PostPropsType>
}

export type DialogsPageType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessageItemPropsType>
}

export type SidebarType = {}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

let state: StateType = {
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
        ]
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
}

export const addPost = (postMessage: string) => {
    // debugger

    const newPost: PostPropsType = {
        id: state.profilePage.posts.length + 1,
        message: postMessage,
        likeCount: 0
    }

    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state, addPost)
}

export default state