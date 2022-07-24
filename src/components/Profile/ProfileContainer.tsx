import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {setUserProfileAC as setUserProfile} from '../../redux/profileReducer';


class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        this.getProfile()
    }

    getProfile = (userId: number = 2) => {
        // this.props.changeIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                const profile = response.data
                // console.log(profile)
                this.props.setUserProfile(profile)
            });
    }

    render() {

        // console.log(this.props.profile)
        return (
            <Profile {...this.props}/>
        );
    }
}


type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>
export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile
    }
}

/*const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setUserProfile: (profile: any) => {
            dispatch(setUserProfileAC(profile))
        }
    }
}*/

const mapDispatchToProps = () => {
    return {
        setUserProfile
    }
}


export default connect(mapStateToProps, mapDispatchToProps())(ProfileContainer);