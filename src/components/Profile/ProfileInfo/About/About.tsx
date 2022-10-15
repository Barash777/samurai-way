import {ContactsType, ProfileType} from "../../../../redux/profileReducer";
import React, {useState} from "react";
import css from "./About.module.css";
import {SubmitHandler, useForm} from "react-hook-form";

type AboutPropsType = {
    profile: ProfileType
    isOwner: boolean
    saveProfile: (profile: ProfileType) => void
}

export const About = ({profile, isOwner, saveProfile}: AboutPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)

    const onButtonEditClickHandler = () => {
        setEditMode(prev => !prev)
    }

    if (editMode) {
        return <AboutForm profile={profile} isOwner={isOwner} editMode={editMode} changeMode={setEditMode}
                          saveProfile={saveProfile}/>
    }

    return <div className={css.aboutMeBlock}>
        {isOwner && !editMode && <button onClick={onButtonEditClickHandler}>Edit profile</button>}
        <h3>Profile info:</h3>
        <div>My name is {profile?.fullName}</div>
        <div>About me: {profile?.aboutMe}</div>
        {profile.lookingForAJob
            ? <div>I'm looking for a job!!! {profile.lookingForAJobDescription}</div>
            : ''}
        <div>
            <b>Contacts:</b>
            {Object.keys(profile.contacts).map((k) => <Contact
                key={k}
                title={k}
                value={profile.contacts[k as keyof ContactsType]}
            />)}
        </div>
    </div>
}


type AboutFormPropsType = {
    profile: ProfileType
    isOwner: boolean
    editMode: boolean
    changeMode: (editMode: boolean) => void
    saveProfile: (profile: ProfileType) => void
}

/*type FormDataType = {
    fullName: string
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    contacts: ContactsType
}*/


export const AboutForm = ({profile, isOwner, editMode, changeMode, saveProfile}: AboutFormPropsType) => {
    const {register, handleSubmit, formState: {errors}} = useForm<ProfileType>({
        mode: 'onTouched'
    });

    const onSubmit: SubmitHandler<ProfileType> = data => {
        changeMode(!editMode)
        saveProfile(data)
    }

    return <div className={css.aboutMeBlock}>
        <form onSubmit={handleSubmit(onSubmit)}>

            {isOwner &&
                <>
                    {editMode && <input type="submit" value={'Save profile'}/>}
                </>}
            <h3>Profile info:</h3>
            <div>My name is <input {...register('fullName', {
                required: 'name is required',
                value: profile?.fullName
            })} placeholder={'name'}/>
                {errors.fullName && <span style={{color: 'red'}}>{errors.fullName.message}</span>}
            </div>
            <div>About me: <input {...register('aboutMe', {
                required: 'about me is required',
                value: profile?.aboutMe
            })} placeholder={'about me'}/>
                {errors.aboutMe && <span style={{color: 'red'}}>{errors.aboutMe.message}</span>}
            </div>

            <div>
                <textarea {...register('lookingForAJobDescription', {
                    required: 'looking for a job description is required',
                    value: profile?.lookingForAJobDescription
                })} placeholder={'looking for a job description'}/>
                {errors.lookingForAJobDescription &&
                    <span style={{color: 'red'}}>{errors.lookingForAJobDescription.message}</span>}
            </div>
            <div>
                <input id={'lookingForAJob'} type={'checkbox'} {...register('lookingForAJob', {
                    value: profile?.lookingForAJob
                })}/>
                <label htmlFor="lookingForAJob">looking for a job?</label>
            </div>
            <div>
                <b>Contacts:</b>
                {Object.keys(profile.contacts).map((k) => {
                    const key = k as keyof ContactsType
                    return <div key={key} style={{marginLeft: '10px'}}>
                        <b>{key}:</b> <input {...register(`contacts.${key}`, {
                        value: profile?.contacts[key],
                        pattern: {
                            value: /^(ftp|http|https):\/\/[^ "]+$/,
                            message: 'Write correct URL'
                        }
                    })} placeholder={key}/>
                        {errors.contacts && errors.contacts[key] &&
                            <span style={{color: 'red'}}>{errors.contacts[key]?.message}</span>}
                    </div>
                })}
            </div>
        </form>
    </div>
}


type ContactPropsType = {
    title: string
    value: string
}

export const Contact = ({title, value}: ContactPropsType) => {
    return <div style={{marginLeft: '10px'}}>
        <b>{title}:</b> {value}
    </div>
}