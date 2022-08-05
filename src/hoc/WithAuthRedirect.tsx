import React from 'react';
import {Navigate,} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppStateType} from '../redux/redux-store';

export type MstpWithAuthRedirectType = ReturnType<typeof mstp>
const mstp = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const WithAuthRedirect = (Component: React.ElementType) => {
    // const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)

    const RedirectComponent = (props: MstpWithAuthRedirectType) => {
        const {isAuth, ...rest} = props
        if (!isAuth) return <Navigate to={'/login'}/>
        return <Component {...rest}/>
    }

    return connect(mstp)(RedirectComponent)
};


/*const WithAuthRedirect = (Component: React.ElementType) => {
    // const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)

    if (!isAuth) {
        return <Navigate to={'/login'}/>
    }

    return (props: any) => <Component value={100500} {...props}/>;
};*/


/*let AuthRedirectComponent = (props: any) => {
    if (!this.props.isAuth) {
        return <Navigate to={'/login'}/>
    }

    return <ProfileContainer {...props} />
}*/

/*function withParams(Component: React.ElementType) {
    return (props: any) => <Component {...props} params={useParams()}/>;
}*/

export default WithAuthRedirect;