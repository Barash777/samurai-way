import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {
    getProfileStatusTC,
    getProfileTC,
    savePhotoTC,
    saveProfileTC,
    updateProfileStatusTC
} from '../../redux/profileReducer';
import {useParams} from 'react-router-dom';
import {compose} from 'redux';
import WithAuthRedirect from '../../hoc/WithAuthRedirect';


class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        this.update()
    }

    componentDidUpdate(prevProps: Readonly<ProfilePropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props?.params?.userId !== prevProps?.params?.userId) {
            this.update()
        }
    }

    update() {
        const userId = this.props?.params?.userId ?? this.props.loggedUserId
        this.props.getProfile(+userId)
        this.props.getProfileStatus(+userId)
    }

    /*shouldComponentUpdate(nextProps: Readonly<ProfilePropsType>, nextState: Readonly<{}>, nextContext: any): boolean {
        // return this.props?.params?.userId !== nextProps?.params?.userId
    }*/


    render() {
        // console.log('userId = ', this.props?.params?.userId)
        // console.log('loggedUserId = ', String(this.props.loggedUserId))
        const isOwner = ((this.props?.params?.userId === undefined && this.props.loggedUserId > 0) ||
            (this.props?.params?.userId === String(this.props.loggedUserId)))

        return (
            <Profile {...this.props} isOwner={isOwner}/>
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
        updateProfileStatus: updateProfileStatusTC,
        savePhoto: savePhotoTC,
        saveProfile: saveProfileTC
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