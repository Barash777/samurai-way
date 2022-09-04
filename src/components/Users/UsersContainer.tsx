import {connect} from 'react-redux';
import {
    // changeFollowStatusAC as changeFollowStatus,
    // changeIsFetchingAC as changeIsFetching,
    // setTotalUsersCountAC as setTotalUsersCount,
    // setUsersAC as setUsers,
    setUsersCurrentPageAC as setCurrentPage,
    // changeFollowingInProgressAC as changeFollowingInProgress,
    getUsersThunkCreator, followTC, unfollowTC,
} from '../../redux/usersReducer';
import {AppStateType} from '../../redux/redux-store';
import React from 'react';
import Users from './Users';
import Preloader from '../Preloader/Preloader';
import {compose} from 'redux';
import WithAuthRedirect from '../../hoc/WithAuthRedirect';
import {
    getCountUsersPerPage,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getTotalUsersCount,
    getUsersSuperSelector
} from '../../redux/usersSelectors';

class UsersAPIComponent extends React.Component<UsersAPIPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.count)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.count)
    }

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader/>
                    : <Users
                        /*users={this.props.users}
                        count={this.props.count}
                        totalUsersCount={this.props.totalUsersCount}
                        currentPage={this.props.currentPage}
                        changeFollowStatus={this.props.changeFollowStatus}
                        // onPageChanged={this.onPageChanged}
                        followingInProgress={this.props.followingInProgress}
                        changeFollowingInProgress={this.props.changeFollowingInProgress}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}*/
                        {...this.props}
                        onPageChanged={this.onPageChanged}
                    />
                }
            </>
        );
    }
}


// UsersInitialStateType


export type MapStateToPropsType = ReturnType<typeof mapStateToProps>
export type MapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>
export type UsersAPIPropsType = MapStateToPropsType & MapDispatchToPropsType


/*const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        count: state.usersPage.count,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}*/
const mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsersSuperSelector(state),
        count: getCountUsersPerPage(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


/*const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPage(currentPage))
        },
        getUsers: (currentPage: number, count: number) => {
            getUsersThunkCreator(currentPage, count)(dispatch)
        },
        follow: (id: number) => {
            followTC(id)(dispatch)
        },
        unfollow: (id: number) => {
            unfollowTC(id)(dispatch)
        }
    }
}

// ??????? WHY ?????
export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);*/


const mapDispatchToProps = () => {
    return {
        setCurrentPage,
        getUsers: getUsersThunkCreator,
        follow: followTC,
        unfollow: unfollowTC
    }
}

// @ts-ignore ??????? WHY ?????
// export default connect(mapStateToProps, mapDispatchToProps())(UsersAPIComponent);

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps()),
    WithAuthRedirect
)
(UsersAPIComponent)