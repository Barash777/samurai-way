import {ContactsType, ProfileType} from "../../../../redux/profileReducer";
import React, {ChangeEvent, useState} from "react";
import css from "./About.module.css";
import {SubmitHandler, useForm} from "react-hook-form";

type AboutPropsType = {
    profile: ProfileType
    isOwner: boolean
}

export const About = ({profile, isOwner}: AboutPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)

    const onButtonEditClickHandler = () => {
        setEditMode(prev => !prev)
    }

    if (editMode) {
        return <AboutForm profile={profile} isOwner={isOwner} editMode={editMode} changeMode={setEditMode}/>
    }

    return <div className={css.aboutMeBlock}>
        {isOwner && !editMode && <button onClick={onButtonEditClickHandler}>Edit profile</button>}
        <h3>Profile info:</h3>
        <p>My name is {profile?.fullName}</p>
        <p>About me: {profile?.aboutMe}</p>
        {profile.lookingForAJob
            ? <div>I'm looking for a job!!! {profile.lookingForAJobDescription}</div>
            : ''}
        <div>
            <b>Contacts:</b>
            {Object.keys(profile.contacts).map((k) => <Contact
                key={k}
                title={k}
                editMode={editMode}
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
}

type FormDataType = {
    message: string
}

export const AboutForm = ({profile, isOwner, editMode, changeMode}: AboutFormPropsType) => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormDataType>();
    const onSubmit: SubmitHandler<FormDataType> = data => {
        console.log(data);
        changeMode(!editMode)
        alert(data.message)
        // sendMessage(data.message)
    }

    return <div className={css.aboutMeBlock}>
        <form onSubmit={handleSubmit(onSubmit)}>
            {isOwner &&
                <>
                    {editMode && <input type="submit" value={'Save profile'}/>}
                </>}
            <div>
                <input {...register('message', {
                    required: 'message is required',
                })}
                       placeholder={'message text'}
                />
            </div>
            <h3>Profile info:</h3>
            <p>My name is {profile?.fullName}</p>
            <p>About me: {profile?.aboutMe}</p>
            {profile.lookingForAJob
                ? <div>I'm looking for a job!!! {profile.lookingForAJobDescription}</div>
                : ''}
            <div>
                <b>Contacts:</b>
                {Object.keys(profile.contacts).map((k) => <Contact
                    key={k}
                    title={k}
                    editMode={editMode}
                    value={profile.contacts[k as keyof ContactsType]}
                />)}
            </div>
        </form>
    </div>

    /*return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <textarea {...register('message', {
                    required: 'message is required',
                })}
                          placeholder={'message text'}
                />
                {/!*{errors.message && <span>{errors.message.message}</span>}*!/}
            </div>
            <div>
                <input type="submit" value={'Save'}/>
            </div>
        </form>
    );*/
}


type ContactPropsType = {
    title: string
    value: string
    editMode: boolean
}

export const Contact = ({title, value, editMode}: ContactPropsType) => {

    const [localValue, setLocalValue] = useState(value ?? undefined)

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalValue(e.currentTarget.value)
    }

    return <div style={{marginLeft: '10px'}}>
        <b>{title}:</b> {editMode ? <input
        value={localValue}
        onChange={onChangeInput}
    /> : value}
    </div>
}