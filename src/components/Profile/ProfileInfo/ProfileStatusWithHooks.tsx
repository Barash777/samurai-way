import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateProfileStatus: (status: string) => void
}

const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [localStatus, setLocalStatus] = useState<string>(props.status)

    const onSpanDblClick = () => {
        setEditMode(true)
    }

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalStatus(e.currentTarget.value)
    }

    const onBlurInput = () => {
        setNewStatus()
    }

    const onKeyDownEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setNewStatus()
        }
    }

    const setNewStatus = () => {
        setEditMode(false)
        props.updateProfileStatus(localStatus)
    }

    useEffect(() => {
        setLocalStatus(props.status)
    }, [props.status])

    return (
        <div>
            {editMode
                ? <div>
                    <input
                        autoFocus
                        value={localStatus}
                        onChange={onChangeInput}
                        onKeyDown={onKeyDownEnter}
                        onBlur={onBlurInput}
                    />
                </div>
                : <div>
                    {/*<span onDoubleClick={this.onSpanDblClick.bind(this)}>{this.state.value}</span>*/}
                    <span onDoubleClick={onSpanDblClick}>{props.status || 'No status'}</span>
                </div>}
        </div>
    );
}

export default ProfileStatusWithHooks;