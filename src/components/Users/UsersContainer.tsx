import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {
    changeFollowStatusAC, setTotalUsersCountAC,
    setUsersAC,
    setUsersCurrentPageAC,
    UserType
} from '../../redux/usersReducer';
import {AppStateType} from '../../redux/redux-store';
import React from 'react';
import axios from 'axios';
import Users from './Users';


class UsersAPIComponent extends React.Component<UsersAPIPropsType> {

    componentDidMount() {
        this.getUsers(this.props.currentPage)
    }

    getUsers = (currentPage: number) => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.count}`)
            .then(response => {
                const users = response.data.items
                // console.log(response.data.totalCount)
                this.props.setUsers(users)
                this.props.setTotalUsersCount(response?.data?.totalCount)
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.getUsers(pageNumber)
    }

    render() {


        return (
            <Users
                users={this.props.users}
                count={this.props.count}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                changeFollowStatus={this.props.changeFollowStatus}
                onPageChanged={this.onPageChanged}
            />
        );
    }
}


// UsersInitialStateType

export type MapStateToPropsType = {
    users: Array<UserType>
    count: number
    totalUsersCount: number
    currentPage: number
}
export type MapDispatchToPropsType = {
    changeFollowStatus: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}
export type UsersAPIPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        count: state.usersPage.count,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        setCurrentPage: (currentPage: number) => {
            dispatch(setUsersCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);