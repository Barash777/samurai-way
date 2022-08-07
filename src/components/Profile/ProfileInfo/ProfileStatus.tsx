import React, {ChangeEvent} from 'react';
// import css from './ProfileInfo.module.css';

type ProfileStatusPropsType = {
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
        value: this.props.status
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
            value: e.currentTarget.value
        })
    }

    onBlurInput = () => {
        this.setState({
            // ...this.state,
            editMode: false
        })
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
                            value={this.state.value}
                            onChange={this.onChangeInput}
                            onBlur={this.onBlurInput}
                        />
                    </div>
                    : <div>
                        {/*<span onDoubleClick={this.onSpanDblClick.bind(this)}>{this.state.value}</span>*/}
                        <span onDoubleClick={this.onSpanDblClick}>{this.state.value}</span>
                    </div>}
            </div>
        );
    }
}

export default ProfileStatus;