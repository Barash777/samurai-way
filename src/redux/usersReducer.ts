/*export type LocationType = {
    city: string
    country: string
}*/

import {usersAPI} from '../api/api';
import {Dispatch} from 'redux';

export type PhotosType = {
    small: string
    large: string
}

export type UserType = {
    id: number
    uniqueUrlName: string
    // photoURL?: string
    followed: boolean
    name: string
    status: string
    photos: PhotosType
    // location?: LocationType
}

const initialState = {
    users: [] as Array<UserType>,
    count: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>
}

export type UsersInitialStateType = typeof initialState

const usersReducer = (state: UsersInitialStateType = initialState, action: UsersUnionACType): UsersInitialStateType => {

    switch (action.type) {
        case 'CHANGE-FOLLOW-STATUS':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: !u.followed} : u)
            }
        case 'SET-USERS':
            return {
                ...state,
                users: [...action.users]
                // users: [...state.users, ...action.users]
            }
        case 'SET-USERS-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case 'SET-TOTAL-USERS-COUNT':
            return {
                ...state,
                totalUsersCount: action.count
            }
        case 'CHANGE-IS-FETCHING-USERS':
            return {
                ...state,
                isFetching: action.isFetching
            }
        case 'CHANGE-IS-FOLLOWING-IN-PROGRESS':
            return {
                ...state,
                followingInProgress: action.follow
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            }
        default:
            return state
    }

}

export type ChangeFollowStatusACType = ReturnType<typeof changeFollowStatusAC>
export const changeFollowStatusAC = (userID: number) => {
    return {
        type: 'CHANGE-FOLLOW-STATUS',
        userID
    } as const
}

export type SetUsersACACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}

export type SetUsersCurrentPageACType = ReturnType<typeof setUsersCurrentPageAC>
export const setUsersCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-USERS-CURRENT-PAGE',
        currentPage
    } as const
}

export type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (count: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        count
    } as const
}

export type ChangeIsFetchingACType = ReturnType<typeof changeIsFetchingAC>
export const changeIsFetchingAC = (isFetching: boolean) => {
    return {
        type: 'CHANGE-IS-FETCHING-USERS',
        isFetching
    } as const
}

export type ChangeFollowingInProgressACType = ReturnType<typeof changeFollowingInProgressAC>
export const changeFollowingInProgressAC = (follow: boolean, id: number) => {
    return {
        type: 'CHANGE-IS-FOLLOWING-IN-PROGRESS',
        follow,
        id
    } as const
}

export type UsersUnionACType = ChangeFollowStatusACType | SetUsersACACType |
    SetUsersCurrentPageACType | SetTotalUsersCountACType | ChangeIsFetchingACType |
    ChangeFollowingInProgressACType


export const getUsersThunkCreator = (currentPage: number, count: number) => (dispatch: Dispatch) => {
    // console.log('here')
    dispatch(changeIsFetchingAC(true))

    usersAPI.getUsers(currentPage, count)
        .then(data => {
            // console.log('here 2')
            const users = data?.items
            dispatch(changeIsFetchingAC(false))
            dispatch(setUsersAC(users))
            dispatch(setTotalUsersCountAC(data?.totalCount))
        });
}

export const followTC = (id: number) => (dispatch: Dispatch) => {
    dispatch(changeFollowingInProgressAC(true, id))
    usersAPI.follow(id)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(changeFollowStatusAC(id))
            }
        }).finally(() => {
        dispatch(changeFollowingInProgressAC(false, id))
    });
}
export const unfollowTC = (id: number) => (dispatch: Dispatch) => {
    dispatch(changeFollowingInProgressAC(true, id))
    usersAPI.unfollow(id)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(changeFollowStatusAC(id))
            }
        }).finally(() => {
        dispatch(changeFollowingInProgressAC(false, id))
    });
}

export default usersReducer;