import {Dispatch} from 'redux';
import {authAPI} from '../api/api';
import {AppThunk} from './redux-store';

const initialState = {
    userId: 0,
    email: '',
    login: '',
    isAuth: false
}

export type AuthInitialStateType = typeof initialState

const authReducer = (state: AuthInitialStateType = initialState, action: AuthUnionACType): AuthInitialStateType => {

    switch (action.type) {
        case 'SET-USER-DATA':
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
        type: 'SET-USER-DATA',
        payload: {
            userId,
            email,
            login,
            isAuth
        }
    } as const
}
// export type LogoutACType = ReturnType<typeof setUserDataAC>
// export const logoutAC = () => {
//     return {
//         type: 'LOGOUT'
//     } as const
// }

export type AuthUnionACType = SetUserDataACType // | LogoutACType

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
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(authMeTC())
                }
            })
            .catch((res) => {
                alert(res.message)
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