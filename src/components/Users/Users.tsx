import React from 'react';
import css from './Users.module.css'
import defaultAvatar from '../../assets/images/default_avatar.png'
import {UserType} from '../../redux/usersReducer';

export type UsersPropsType = {
    users: Array<UserType>
    count: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    changeFollowStatus: (userID: number) => void
}


const Users = (props: UsersPropsType) => {


    const pagesCount = Math.ceil(props.totalUsersCount / props.count)
    const pages = []
    for (let i = 1; i <= Math.min(pagesCount, 5); i++) {
        pages.push(i)
    }


    const paginationJSX = (
        <div>
            {pages.map(p => <span onClick={() => props.onPageChanged(p)}
                                  className={`${css.pageNumber} ${props.currentPage === p ? css.selectedPage : ''}`}>{p} </span>)}
            <span> of {pagesCount}</span>
        </div>
    )

    const usersJSX = props.users.map(u => (
        <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small ?? defaultAvatar} className={css.avatar}/>
                </div>
                <div>
                    <button onClick={() => {
                        props.changeFollowStatus(u.id)
                    }}>{u.followed ? 'UNFOLLOW' : 'FOLLOW'}</button>
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
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