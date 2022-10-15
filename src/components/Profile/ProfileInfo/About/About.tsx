import {ContactsType, ProfileType} from "../../../../redux/profileReducer";
import React, {ChangeEvent, useState} from "react";
import css from "./About.module.css";
import {RegisterOptions, SubmitHandler, useFieldArray, useForm} from "react-hook-form";
import {UseFormRegister} from "react-hook-form/dist/types/form";
import {useAppDispatch} from "../../../../hooks/main";

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

type FormDataType = {
    fullName: string
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    contacts: ContactsType
}

export const AboutForm = ({profile, isOwner, editMode, changeMode, saveProfile}: AboutFormPropsType) => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormDataType>();
    const dispatch = useAppDispatch()
    /*const {fields} = useFieldArray({
        contacts, // control props comes from useForm (optional: if you are using FormContext)
        name: "test", // unique name for your Field Array
    });*/

    const onSubmit: SubmitHandler<FormDataType> = data => {
        console.log(data);
        changeMode(!editMode)
        saveProfile(data as ProfileType)

        // alert(data.message)
        // sendMessage(data.message)
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
            })} placeholder={'name'}/></div>
            <div>About me: <input {...register('aboutMe', {
                required: 'about me is required',
                value: profile?.aboutMe
            })} placeholder={'about me'}/></div>

            <div>
                <textarea {...register('lookingForAJobDescription', {
                    required: 'looking for a job description is required',
                    value: profile?.lookingForAJobDescription
                })} placeholder={'looking for a job description'}/>
            </div>
            <div>
                <input id={'lookingForAJob'} type={'checkbox'} {...register('lookingForAJob', {
                    // required: 'about me is required',
                    value: profile?.lookingForAJob
                })}/>
                <label htmlFor="lookingForAJob">looking for a job?</label>
            </div>
            <div>
                <b>Contacts:</b>
                {Object.keys(profile.contacts).map((k, index) => (
                        <div key={k} style={{marginLeft: '10px'}}>
                            <b>{k}:</b> <input/>
                        </div>
                    )
                    /*<Contact
                    key={k}
                    title={k}
                    editMode={editMode}
                    register={register}
                    value={profile.contacts[k as keyof ContactsType]}
                />*/)}
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
}

export const Contact = ({title, value}: ContactPropsType) => {

    const [localValue, setLocalValue] = useState(value ?? undefined)

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalValue(e.currentTarget.value)
    }

    return <div style={{marginLeft: '10px'}}>
        <b>{title}:</b> {value}
    </div>
}