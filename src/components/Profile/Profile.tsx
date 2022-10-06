import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfilePropsType} from './ProfileContainer';

type ProfilePropsTypeWithOwner = ProfilePropsType & {
    isOwner: boolean
}

function Profile(props: ProfilePropsTypeWithOwner) {

    // console.log(props)


    return (
        <div>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateProfileStatus={props.updateProfileStatus}
                isOwner={props.isOwner}
            />
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;