import {AppStateType} from './redux-store';

export const getUsers = (state: AppStateType) => {
    return state.usersPage.users
}

export const getCountUsersPerPage = (state: AppStateType) => {
    return state.usersPage.count
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}