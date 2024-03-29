import {AppStateType} from './redux-store';
import {createSelector} from 'reselect';
import {UserType} from './usersReducer';

export const getUsers = (state: AppStateType) => {
    return state.usersPage.users
}

export const getUsersSuperSelector = createSelector(getUsers, (users: Array<UserType>) => {
    // return users.filter(u => true)
    return users
})

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