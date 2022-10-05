import React from 'react';
import {NavLink} from "react-router-dom";
import defaultAvatar from "../../../assets/images/default_avatar.png";
import css from "./User.module.css";
import {UserType} from "../../../redux/usersReducer";

type UserPropsType = {
    user: UserType
    followingInProgress: Array<number>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}

const User = ({user, followingInProgress, follow, unfollow}: UserPropsType) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small ?? defaultAvatar} className={css.avatar} alt={'avatar'}/>
                    </NavLink>
                </div>
                <div>
                    <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {

                        if (!user.followed) {
                            follow(user.id)
                        } else {
                            unfollow(user.id)
                        }

                    }}>{user.followed ? 'UNFOLLOW' : 'FOLLOW'}</button>
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
            </span>
        </div>
    );
};

export default User;