import {authAPI} from '../api/api';
import {AppThunk} from './redux-store';

const initialState = {
    userId: 0,
    email: '',
    login: '',
    isAuth: false,
    error: null as (string | null)
}

export type AuthInitialStateType = typeof initialState

const authReducer = (state: AuthInitialStateType = initialState, action: AuthUnionACType): AuthInitialStateType => {

    switch (action.type) {
        case 'AUTH/SET-USER-DATA':
        case 'AUTH/SET-AUTH-ERROR':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }

}

export type SetUserDataACType = ReturnType<typeof setUserDataAC>
export const setUserDataAC = (userId: number, email: string, login: string, isAuth: boolean) => {
    return {
        type: 'AUTH/SET-USER-DATA',
        payload: {
            userId,
            email,
            login,
            isAuth
        }
    } as const
}
export type SetAuthErrorACType = ReturnType<typeof setAuthErrorAC>
export const setAuthErrorAC = (error: string | null) => {
    return {
        type: 'AUTH/SET-AUTH-ERROR',
        payload: {
            error
        }
    } as const
}

// export type LogoutACType = ReturnType<typeof setUserDataAC>
// export const logoutAC = () => {
//     return {
//         type: 'LOGOUT'
//     } as const
// }

export type AuthUnionACType = SetUserDataACType | SetAuthErrorACType

export default authReducer;

export const authMeTC = (): AppThunk =>
    (dispatch) => {
        authAPI.authMe()
            .then(response => {
                if (response.resultCode === 0) {
                    const data = response.data
                    dispatch(setUserDataAC(data.id, data.email, data.login, true))
                }
            });
    }
export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunk =>
    (dispatch) => {
        dispatch(setAuthErrorAC(null))
        authAPI.login(email, password, rememberMe)
            .then(response => {
                // console.log('then in reducer ', response)
                if (response.resultCode === 0) {
                    dispatch(authMeTC())
                } else {
                    const message = response.messages.length ? response.messages[0] : 'some error'
                    dispatch(setAuthErrorAC(message))
                }
            })
            .catch((e) => {
                console.log('error in CATCH reducer', e)
            });
    }
export const logoutTC = (): AppThunk =>
    (dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(setUserDataAC(0, '', '', false))
                }
            });
    }