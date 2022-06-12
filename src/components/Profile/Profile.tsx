import React from 'react';
import MyPosts from './MyPosts/MyPosts';
// import css from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePropsType} from '../../Types';


function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                addPost={props.addPost}
            />
        </div>
    );
}

export default Profile;