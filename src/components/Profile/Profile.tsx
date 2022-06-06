import React from 'react';
import MyPosts from './MyPosts/MyPosts';
// import css from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';

type ProfilePropsType = {
    profilePage: ProfilePageType
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}/>
        </div>
    );
}

export default Profile;