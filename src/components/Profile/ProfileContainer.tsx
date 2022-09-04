import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {getProfileStatusTC, getProfileTC, updateProfileStatusTC} from '../../redux/profileReducer';
import {useParams} from 'react-router-dom';
import {compose} from 'redux';
import WithAuthRedirect from '../../hoc/WithAuthRedirect';


class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        const userId = this.props?.params?.userId ?? this.props.loggedUserId
        this.props.getProfile(+userId)
        this.props.getProfileStatus(+userId)
    }

    render() {
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
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isAuth: state.auth.isAuth,
        loggedUserId: state.auth.userId,
    }
}

/*const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        getProfile: (id: number) => {
            getProfileTC(id)(dispatch)
        }
    }
}*/

const mapDispatchToProps = () => {
    return {
        getProfile: getProfileTC,
        getProfileStatus: getProfileStatusTC,
        updateProfileStatus: updateProfileStatusTC
    }
}


export function withParams(Component: React.ElementType) {
    return (props: any) => <Component {...props} params={useParams()}/>;
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps()),
    withParams,
    WithAuthRedirect
)
(ProfileContainer)