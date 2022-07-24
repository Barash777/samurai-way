import {PhotosType} from './usersReducer';

export type PostType = {
    id: number
    message: string
    likeCount: number
}

export type ContactsType = {
    'facebook': string
    'website': string,
    'vk': string
    'twitter': string
    'instagram': string
    'youtube': string
    'github': string
    'mainLink': string
}

export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
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
    profile: {} as ProfileType,
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
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}
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
        newText
    } as const
}

export type SetUserProfileACType = ReturnType<typeof setUserProfileAC>
export const setUserProfileAC = (profile: any) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}

export type ProfileUnionACType = AddPostACType | UpdateNewPostTextACType | SetUserProfileACType

export default profileReducer;