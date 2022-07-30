import {connect} from 'react-redux';
import {
    changeFollowStatusAC as changeFollowStatus,
    changeIsFetchingAC as changeIsFetching,
    setTotalUsersCountAC as setTotalUsersCount,
    setUsersAC as setUsers,
    setUsersCurrentPageAC as setCurrentPage
} from '../../redux/usersReducer';
import {AppStateType} from '../../redux/redux-store';
import React from 'react';
import Users from './Users';
import Preloader from '../Preloader/Preloader';
import {usersAPI} from '../../api/api';

class UsersAPIComponent extends React.Component<UsersAPIPropsType> {

    componentDidMount() {
        // console.log(this.props)
        this.getUsersClassMethod(this.props.currentPage)
    }

    getUsersClassMethod = (currentPage: number) => {
        this.props.changeIsFetching(true)

        usersAPI.getUsers(currentPage, this.props.count)
            .then(data => {
                const users = data?.items
                this.props.changeIsFetching(false)
                this.props.setUsers(users)
                this.props.setTotalUsersCount(data?.totalCount)
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.getUsersClassMethod(pageNumber)
    }

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader/>
                    : <Users
                        // isFetching={this.props.isFetching}
                        users={this.props.users}
                        count={this.props.count}
                        totalUsersCount={this.props.totalUsersCount}
                        currentPage={this.props.currentPage}
                        changeFollowStatus={this.props.changeFollowStatus}
                        onPageChanged={this.onPageChanged}
                    />
                }
            </>
        );
    }
}


// UsersInitialStateType

/*export type MapStateToPropsType = {
    users: Array<UserType>
    count: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
*/
/*export type MapDispatchToPropsType = {
    changeFollowStatus: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    changeIsFetching: (isFetching: boolean) => void
}*/

export type MapStateToPropsType = ReturnType<typeof mapStateToProps>
export type MapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>
export type UsersAPIPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        count: state.usersPage.count,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

/*const mapDispatchToProps = (dispatch: Dispatch) => {
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
        },
        changeIsFetching: (isFetching: boolean) => {
            dispatch(changeIsFetchingAC(isFetching))
        }
    }
}*/

const mapDispatchToProps = () => {
    return {
        changeFollowStatus,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        changeIsFetching
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(UsersAPIComponent);