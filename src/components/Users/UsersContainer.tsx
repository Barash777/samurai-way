// import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {changeFollowStatusAC, setUsersAC, UserType} from '../../redux/usersReducer';
import {AppStateType} from '../../redux/redux-store';
import UsersC from './UsersC';

export type MapStateToPropsType = {
    users: Array<UserType>
}
export type MapDispatchToPropsType = {
    changeFollowStatus: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        changeFollowStatus: (userID: number) => {
            dispatch(changeFollowStatusAC(userID))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersC);