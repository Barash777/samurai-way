import css from './ProfileInfo.module.css';
import React from 'react';
import {ProfileType} from '../../../redux/profileReducer';
import Preloader from '../../Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import defaultAvatar from "../../../assets/images/default_avatar.png";
import {About} from "./About/About";

export type ProfileInfoType = {
    profile: ProfileType,
    status: string
    updateProfileStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}

function ProfileInfo(props: ProfileInfoType) {
    const avaPath = props.profile?.photos?.large || props.profile?.photos?.small || defaultAvatar

    const onPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log('photo selected')
        const files = e.target.files as FileList;
        // console.log(files)
        // console.log(files[0])
        if (files.length > 0) {
            const file = files[0]
            // console.log('save photo')
            props.savePhoto(file)
        }
    }

    if (!props.profile?.userId) {
        return <Preloader/>
    }

    return (
        <>
            <div className={css.description}>
                <img className={css.avatar}
                     src={avaPath}
                     alt=""/>
                {props.isOwner && <input type={"file"} onChange={onPhotoSelected}/>}
                <ProfileStatusWithHooks
                    status={props.status}
                    updateProfileStatus={props.updateProfileStatus}
                    isOwner={props.isOwner}
                />
            </div>

            <About profile={props.profile} isOwner={props.isOwner}/>

        </>
    );
}

export default ProfileInfo;