import {useSelector} from 'react-redux';
import {AppStateType} from '../redux/redux-store';
import {Navigate} from 'react-router-dom';
import React from 'react';

const useAuthMe = (Component: React.ElementType) => {
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)

    if (!isAuth) {
        return <Navigate to={'/login'}/>
    }

    return (props: any) => <Component {...props}/>;
}

export {useAuthMe}