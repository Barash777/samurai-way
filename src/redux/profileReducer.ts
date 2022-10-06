import {PhotosType} from './usersReducer';
import {Dispatch} from 'redux';
import {profileAPI} from '../api/api';

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
    status: ''
}

export type ProfileInitialStateType = typeof initialState

const profileReducer = (state: ProfileInitialStateType = initialState, action: ProfileUnionACType): ProfileInitialStateType => {

    switch (action.type) {
        case 'PROFILE/ADD-POST':
            const newPost: PostType = {
                id: state.posts.length + 1,
                message: action.text,
                likeCount: 0
            }
            return {...state, posts: [...state.posts, newPost]}
        case 'PROFILE/DELETE-POST':
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.id)
            }
        case 'PROFILE/SET-USER-PROFILE':
            return {...state, profile: action.profile}
        case 'PROFILE/SET-PROFILE-STATUS':
            return {...state, status: action.status}
        case 'PROFILE/SET-PROFILE-PHOTO':
            return {...state, profile: {...state.profile, photos: action.photos}}
        default:
            return state
    }
}


export type AddPostACType = ReturnType<typeof addPostAC>
export const addPostAC = (text: string) => {
    return {
        type: 'PROFILE/ADD-POST',
        text
    } as const
}
export type DeletePostACType = ReturnType<typeof deletePostAC>
export const deletePostAC = (id: number) => {
    return {
        type: 'PROFILE/DELETE-POST',
        id
    } as const
}


export type SetUserProfileACType = ReturnType<typeof setUserProfileAC>
export const setUserProfileAC = (profile: any) => {
    return {
        type: 'PROFILE/SET-USER-PROFILE',
        profile
    } as const
}

export type SetProfileStatusACType = ReturnType<typeof setProfileStatusAC>
export const setProfileStatusAC = (status: string) => {
    return {
        type: 'PROFILE/SET-PROFILE-STATUS',
        status
    } as const
}

export type SavePhotoACType = ReturnType<typeof savePhotoAC>
export const savePhotoAC = (photos: PhotosType) => {
    return {
        type: 'PROFILE/SET-PROFILE-PHOTO',
        photos
    } as const
}

export type ProfileUnionACType = AddPostACType
    | SetUserProfileACType | SetProfileStatusACType
    | DeletePostACType | SavePhotoACType

export const getProfileTC = (id: number) => async (dispatch: Dispatch) => {
    try {
        const data = await profileAPI.getProfile(id)
        dispatch(setUserProfileAC(data))
    } catch (e) {
        console.error('something wrong, e = ', e)
    }
}

export const getProfileStatusTC = (id: number) => async (dispatch: Dispatch) => {
    try {
        const data = await profileAPI.getStatus(id)
        dispatch(setProfileStatusAC(data))
    } catch (e) {
        console.error('something wrong, e = ', e)
    }
}

export const updateProfileStatusTC = (status: string) => async (dispatch: Dispatch) => {
    try {
        const data = await profileAPI.updateStatus(status)
        // console.log('UPDATE STATUS, res = ', response)
        // @ts-ignore
        if (data.resultCode === 0) {
            dispatch(setProfileStatusAC(status))
            // console.log('status updated')
        }
    } catch (e) {
        console.error('something wrong, e = ', e)
    }
}

export const savePhotoTC = (file: any) => async (dispatch: Dispatch) => {
    try {
        const data = await profileAPI.savePhoto(file)
        // @ts-ignore
        if (data.resultCode === 0) {
            dispatch(savePhotoAC(data.photos))
            // console.log('status updated')
        }
    } catch (e) {
        console.error('something wrong, e = ', e)
    }
}

export default profileReducer;