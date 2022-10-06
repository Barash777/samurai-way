import css from './ProfileInfo.module.css';
import React from 'react';
import {ProfileType} from '../../../redux/profileReducer';
import Preloader from '../../Preloader/Preloader';
// import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import defaultAvatar from "../../../assets/images/default_avatar.png";

export type ProfileInfoType = {
    profile: ProfileType,
    status: string
    updateProfileStatus: (status: string) => void
    isOwner: boolean
}

function ProfileInfo(props: ProfileInfoType) {
    // console.log('ProfileInfo: ', props.profile)

    const avaPath = props.profile?.photos?.large || props.profile?.photos?.small || defaultAvatar

    if (!props.profile?.userId) {
        return <Preloader/>
    }

    /*export type ProfileType = {
        contacts: ContactsType
        lookingForAJob: boolean
        lookingForAJobDescription: string
    }*/

    // console.log('isOwner = ', props.isOwner)

    return (
        <>
            <div className={css.description}>
                <img className={css.avatar}
                    // src="https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg"
                    //  src={props.profile?.photos?.large || props.profile?.photos?.small || 'https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg'}
                     src={avaPath}
                     alt=""/>
                {props.isOwner && <input type={"file"}/>}
                <ProfileStatusWithHooks
                    status={props.status}
                    updateProfileStatus={props.updateProfileStatus}
                />
            </div>


            <div className={css.aboutMeBlock}>
                <h3>About me</h3>
                <p>My name is {props.profile?.fullName}</p>
                <p>{props.profile?.aboutMe}</p>
                {props.profile.lookingForAJob
                    ? <div>I'm looking for a job!!! {props.profile.lookingForAJobDescription}</div>
                    : ''}
            </div>

        </>
    );
}

export default ProfileInfo;