import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfilePropsType} from './ProfileContainer';


function Profile(props: ProfilePropsType) {

    // console.log(props)


    return (
        <div>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateProfileStatus={props.updateProfileStatus}
            />
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;