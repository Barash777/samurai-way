import React, {ChangeEvent} from 'react';

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
        this.setNewStatus()
    }

    onKeyDownEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            this.setNewStatus()
        }
    }

    setNewStatus = () => {
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

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status)
            this.setState({
                localStatus: this.props.status
            })
        // console.log('Updated')
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <div>
                        <input
                            autoFocus
                            value={this.state.localStatus}
                            onChange={this.onChangeInput}
                            onKeyDown={this.onKeyDownEnter}
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