import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {getProfileTC} from '../../redux/profileReducer';
import {useParams} from 'react-router-dom';
import WithAuthRedirect from '../../hoc/WithAuthRedirect';
import {compose} from 'redux';


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
        getProfile: (id: number) => {
            getProfileTC(id)(dispatch)
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


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps()),
    withParams,
    WithAuthRedirect
)
(ProfileContainer)