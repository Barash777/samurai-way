import React, {ChangeEvent} from 'react';
// import css from './ProfileInfo.module.css';

type ProfileStatusPropsType = {
    status: string
    updateProfileStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    // just for Heroku update
    state = {
        editMode: false,
        localStatus: this.props.status
    }

    onSpanDblClick = () => {
        this.setState({
            // ...this.state,
            editMode: true
        })
    }

    onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            // ...this.state,
            localStatus: e.currentTarget.value
        })
    }

    onBlurInput = () => {
        this.setState({
            // ...this.state,
            editMode: false
        })
        this.props.updateProfileStatus(this.state.localStatus)
    }

    /*onSpanDblClick() {
        this.setState({
            ...this.state,
            editMode: true
        })
    }*/

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <div>
                        <input
                            autoFocus
                            value={this.state.localStatus}
                            onChange={this.onChangeInput}
                            onBlur={this.onBlurInput}
                        />
                    </div>
                    : <div>
                        {/*<span onDoubleClick={this.onSpanDblClick.bind(this)}>{this.state.value}</span>*/}
                        <span onDoubleClick={this.onSpanDblClick}>{this.props.status || 'No status'}</span>
                    </div>}
            </div>
        );
    }
}

export default ProfileStatus;