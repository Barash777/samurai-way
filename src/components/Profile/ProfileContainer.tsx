import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {getProfileTC} from '../../redux/profileReducer';
import {useParams} from 'react-router-dom';
import WithAuthRedirect from '../../hoc/WithAuthRedirect';


class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        const userId = this.props?.params?.userId ?? 24797
        this.props.getProfile(+userId)
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
        getProfile: getProfileTC
    }
}


function withParams(Component: React.ElementType) {
    return (props: any) => <Component {...props} params={useParams()}/>;
}

// const withAuth = WithAuthRedirect(ProfileContainer)
// const withAuth = ProfileContainer

// export default connect(mapStateToProps, mapDispatchToProps())(ProfileContainer);
// @ts-ignore
// export default withParams(connect(mapStateToProps, mapDispatchToProps())(WithAuthRedirect(ProfileContainer)));
export default WithAuthRedirect(withParams(connect(mapStateToProps, mapDispatchToProps())(ProfileContainer)));