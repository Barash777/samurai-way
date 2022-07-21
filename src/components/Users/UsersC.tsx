import React from 'react';
import {UsersPropsType} from './UsersContainer';
import css from './Users.module.css'
import axios from 'axios';
// import * as axios from 'axios'
import defaultAvatar from '../../assets/images/default_avatar.png'


class Users extends React.Component<UsersPropsType> {

    /*constructor(props: UsersPropsType) {
        super(props);
    }*/

    componentDidMount() {
        this.getUsers(this.props.currentPage)
        // console.log(this.props.pageSize)
    }

    getUsers = (currentPage: number) => {
        // if (this.props.users.length === 0) {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.count}`)
            .then(response => {
                const users = response.data.items
                // console.log(response.data.totalCount)
                this.props.setUsers(users)
                this.props.setTotalUsersCount(response?.data?.totalCount)
            });
        // }
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.getUsers(pageNumber)
    }

    render() {


        /*if (props.users.length === 0) {
            axios
                .get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    const users = response.data.items
                    console.log(users)
                    props.setUsers(users)
                });
        }*/

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.count)
        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }


        const paginationJSX = (
            <div>
                {pages.map(p => <span onClick={() => this.onPageChanged(p)}
                                      className={`${css.pageNumber} ${this.props.currentPage === p ? css.selectedPage : ''}`}>{p} </span>)}
                {/*<span> of {pagesCount}</span>*/}
            </div>
        )

        const usersJSX = this.props.users.map(u => (
            <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small ?? defaultAvatar} className={css.avatar}/>
                </div>
                <div>
                    <button onClick={() => {
                        this.props.changeFollowStatus(u.id)
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
                {/*<div>
                    <button onClick={this.getUsers}>Get users</button>
                </div>*/}
                {paginationJSX}
                {usersJSX}
            </div>
        );
    }
}

export default Users;