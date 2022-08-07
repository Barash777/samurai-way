import css from './ProfileInfo.module.css';
import React from 'react';
import {ProfileType} from '../../../redux/profileReducer';
import Preloader from '../../Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

export type ProfileInfoType = {
    profile: ProfileType
}

function ProfileInfo(props: ProfileInfoType) {
    // console.log('ProfileInfo: ', props.profile)

    if (!props.profile?.userId) {
        return <Preloader/>
    }

    /*export type ProfileType = {
        contacts: ContactsType
        lookingForAJob: boolean
        lookingForAJobDescription: string
    }*/

    return (
        <>
            {/*<div className={css.topImage}>
                <img
                    // src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                    src={props.profile?.photos?.large ?? 'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'}
                    alt=""/>
            </div>*/}
            <div className={css.description}>
                <img className={css.avatar}
                    // src="https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg"
                     src={props.profile?.photos?.small ?? 'https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg'}
                     alt=""/>
                <ProfileStatus status={'Hello'}/>
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