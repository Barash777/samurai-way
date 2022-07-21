import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {
    changeFollowStatusAC, setTotalUsersCountAC,
    setUsersAC,
    setUsersCurrentPageAC,
    UserType
} from '../../redux/usersReducer';
import {AppStateType} from '../../redux/redux-store';
import UsersC from './UsersC';

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
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType


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

export default connect(mapStateToProps, mapDispatchToProps)(UsersC);