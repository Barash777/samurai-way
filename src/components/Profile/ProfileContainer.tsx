import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {setUserProfileAC as setUserProfile} from '../../redux/profileReducer';
import {useParams} from 'react-router-dom';


class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        // console.log(this.props)
        let userId = this.props?.params?.userId
        // let userId = this.props?.children
        // const userId = '2'
        this.getProfile(userId ? userId : '2')
    }

    getProfile = (userId: string = '2') => {
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

        // console.log(this.props)
        return (
            <Profile {...this.props}/>
        );
    }
}


type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>
export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType & {
    params: {
        userId: string
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile
    }
}

/*const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setUserProfile: (profile: ProfileType) => {
            dispatch(setUserProfileAC(profile))
        }
    }
}*/

const mapDispatchToProps = () => {
    return {
        setUserProfile
    }
}


function withParams(Component: React.ElementType) {
    return (props: any) => <Component {...props} params={useParams()}/>;
}

// export default connect(mapStateToProps, mapDispatchToProps())(ProfileContainer);
export default withParams(connect(mapStateToProps, mapDispatchToProps())(ProfileContainer));