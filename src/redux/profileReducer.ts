import {AddPostActionType, AllActionsType, PostPropsType, ProfilePageType, UpdateNewPostTextActionType} from '../Types';

const initialState: ProfilePageType = {
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
}

const profileReducer = (state: ProfilePageType = initialState, action: AllActionsType): ProfilePageType => {

    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostPropsType = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likeCount: 0
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.newText}
    }

    return state
}

export const addPostAC = (): AddPostActionType => {
    return {
        type: 'ADD-POST'
    }
}

export const updateNewPostTextAC = (newText: string): UpdateNewPostTextActionType => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    }
}

export default profileReducer;