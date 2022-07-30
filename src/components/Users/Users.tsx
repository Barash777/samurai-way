import React from 'react';
import css from './Users.module.css'
import defaultAvatar from '../../assets/images/default_avatar.png'
import {UserType} from '../../redux/usersReducer';
import {NavLink} from 'react-router-dom';
import {usersAPI} from '../../api/api';

export type UsersPropsType = {
    // isFetching: boolean
    users: Array<UserType>
    count: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    changeFollowStatus: (userID: number) => void
    changeFollowingInProgress: (follow: boolean, id: number) => void
    followingInProgress: Array<number>
    // follow: (userID: number) => Promise<any>
    // unfollow: (userID: number) => Promise<any>
}


const Users = (props: UsersPropsType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.count)
    const pages = []
    for (let i = 1; i <= Math.min(pagesCount, 5); i++) {
        pages.push(i)
    }


    const paginationJSX = (
        <div>
            {pages.map(p => <span key={p} onClick={() => props.onPageChanged(p)}
                                  className={`${css.pageNumber} ${props.currentPage === p ? css.selectedPage : ''}`}>{p} </span>)}
            <span> of {pagesCount}</span>
        </div>
    )

    const usersJSX = props.users.map(u => (
        <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small ?? defaultAvatar} className={css.avatar} alt={'avatar'}/>
                    </NavLink>
                </div>
                <div>
                    <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                        props.changeFollowingInProgress(true, u.id)
                        if (!u.followed) {
                            usersAPI.follow(u.id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        props.changeFollowStatus(u.id)
                                    }
                                }).finally(() => {
                                props.changeFollowingInProgress(false, u.id)
                            });
                        } else {
                            usersAPI.unfollow(u.id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        props.changeFollowStatus(u.id)
                                    }
                                }).finally(() => {
                                props.changeFollowingInProgress(false, u.id)
                            });
                        }

                    }}>{u.followed ? 'UNFOLLOW' : 'FOLLOW'}</button>
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                {/*<span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>*/}
            </span>
        </div>
    ))

    return (
        <div>
            {paginationJSX}
            {usersJSX}
        </div>
    );
};

export default Users;