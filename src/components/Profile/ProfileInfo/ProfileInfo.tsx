import css from './ProfileInfo.module.css';
import React from 'react';
import {ContactsType, ProfileType} from '../../../redux/profileReducer';
import Preloader from '../../Preloader/Preloader';
// import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import defaultAvatar from "../../../assets/images/default_avatar.png";

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
                />
            </div>

            <About profile={props.profile}/>

        </>
    );
}

type ContactPropsType = {
    title: string
    value: string
}

const Contact = ({title, value}: ContactPropsType) => {

    return <div style={{marginLeft: '10px'}}>
        <b>{title}:</b> {value}
    </div>
}

type AboutPropsType = {
    profile: ProfileType
}

const About = (props: AboutPropsType) => {
    return <div className={css.aboutMeBlock}>
        <h3>About me</h3>
        <p>My name is {props.profile?.fullName}</p>
        <p>{props.profile?.aboutMe}</p>
        {props.profile.lookingForAJob
            ? <div>I'm looking for a job!!! {props.profile.lookingForAJobDescription}</div>
            : ''}
        <div>
            <b>Contacts:</b>
            {Object.keys(props.profile.contacts).map((k) => <Contact
                key={k} title={k}
                value={props.profile.contacts[k as keyof ContactsType]}
            />)}
        </div>
    </div>
}

export default ProfileInfo;