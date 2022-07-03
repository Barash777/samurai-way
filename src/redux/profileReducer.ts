import {AddPostActionType, AllActionsType, PostPropsType, ProfilePageType, UpdateNewPostTextActionType} from '../Types';

const profileReducer = (state: ProfilePageType, action: AllActionsType) => {

    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostPropsType = {
                id: state.posts.length + 1,
                // message: postMessage,
                message: state.newPostText,
                likeCount: 0
            }

            state.posts.push(newPost)
            state.newPostText = ''
            break;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            break;
    }

    return state
}

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

export default profileReducer;