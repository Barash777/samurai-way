import React from 'react';
import {UserType} from '../../redux/usersReducer';
import Paginator from "../Paginator/Paginator";
import User from "./User/User";

export type UsersPropsType = {
    // isFetching: boolean
    users: Array<UserType>
    count: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<number>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}


const Users = (props: UsersPropsType) => {

    const usersJSX = props.users.map(u => (
        <User
            key={u.id}
            user={u}
            follow={props.follow}
            unfollow={props.unfollow}
            followingInProgress={props.followingInProgress}
        />
    ))

    return (
        <div>
            <Paginator
                count={props.count}
                totalItemsCount={props.totalUsersCount}
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}
                portion={10}
            />
            {usersJSX}
        </div>
    );
};

export default Users;