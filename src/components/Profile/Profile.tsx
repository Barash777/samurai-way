import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfilePropsType} from './ProfileContainer';

type ProfilePropsTypeWithOwner = ProfilePropsType & {
    isOwner: boolean
    savePhoto: (file: File) => void
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
                savePhoto={props.savePhoto}
            />
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;