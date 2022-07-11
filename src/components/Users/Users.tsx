import React from 'react';
import {UsersPropsType} from './UsersContainer';
import css from './Users.module.css'
import {UserType} from '../../redux/usersReducer';

const arrayUsers: Array<UserType> = [
    {
        id: 1,
        photoURL: 'https://pngimg.com/uploads/minions/small/minions_PNG60.png',
        followed: true,
        fullName: 'Eric',
        status: 'tra lala al',
        location: {
            city: 'Minsk',
            country: 'Belarus'
        }
    },
    {
        id: 2,
        photoURL: 'https://pngimg.com/uploads/minions/minions_PNG75.png',
        followed: false,
        fullName: 'Oleg',
        status: '... trsdf a lala al',
        location: {
            city: 'Kiev',
            country: 'Ukraine'
        }
    },
    {
        id: 3,
        photoURL: 'https://pngimg.com/uploads/minions/small/minions_PNG86.png',
        followed: true,
        fullName: 'Ivan',
        status: '!!! --- !!!',
        location: {
            city: 'Moscow',
            country: 'Russia'
        }
    }
]

const Users = (props: UsersPropsType) => {

    if (props.users.length === 0) {
        props.setUsers(arrayUsers)
    }

    const usersJSX = props.users.map(u => (
        <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoURL} className={css.avatar}/>
                </div>
                <div>
                    <button onClick={() => {
                        props.changeFollowStatus(u.id)
                    }}>{u.followed ? 'UNFOLLOW' : 'FOLLOW'}</button>
                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
        </div>
    ))

    return (
        <div>
            <div>Users:</div>
            {usersJSX}
        </div>
    );
};

export default Users;