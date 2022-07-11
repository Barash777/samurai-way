import React from 'react';
import {UsersPropsType} from './UsersContainer';
import css from './Users.module.css'
// import {UserType} from '../../redux/usersReducer';
import axios from 'axios';
// import * as axios from 'axios'
import defaultAvatar from '../../assets/images/default_avatar.png'

/*const arrayUsers: Array<UserType> = [
    {
        id: 1,
        photoURL: 'https://pngimg.com/uploads/minions/small/minions_PNG60.png',
        followed: true,
        name: 'Eric',
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
        name: 'Oleg',
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
        name: 'Ivan',
        status: '!!! --- !!!',
        location: {
            city: 'Moscow',
            country: 'Russia'
        }
    }
]*/

const Users = (props: UsersPropsType) => {

    const getUsers = () => {
        if (props.users.length === 0) {
            axios
                .get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    const users = response.data.items
                    console.log(users)
                    props.setUsers(users)
                });
        }
    }

    /*if (props.users.length === 0) {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                const users = response.data.items
                console.log(users)
                props.setUsers(users)
            });
    }*/

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
            <div>
                <button onClick={getUsers}>Get users</button>
            </div>
            {usersJSX}
        </div>
    );
};

export default Users;