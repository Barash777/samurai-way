export type PostType = {
    id: number
    message: string
    likeCount: number
}

const initialState = {
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
    ] as Array<PostType>,
    newPostText: '',
}

export type ProfileInitialStateType = typeof initialState

const profileReducer = (state: ProfileInitialStateType = initialState, action: ProfileUnionACType): ProfileInitialStateType => {

    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likeCount: 0
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.newText}
        default:
            return state
    }

}

export type AddPostACType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
export const updateNewPostTextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}

export type ProfileUnionACType = AddPostACType | UpdateNewPostTextACType

export default profileReducer;