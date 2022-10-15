import {authAPI} from '../api/api';
import {AppThunk} from './redux-store';

const initialState = {
    userId: 0,
    email: '',
    login: '',
    isAuth: false,
    error: null as (string | null),
    captchaUrl: null as (string | null)
}

export type AuthInitialStateType = typeof initialState

const authReducer = (state: AuthInitialStateType = initialState, action: AuthUnionACType): AuthInitialStateType => {

    switch (action.type) {
        case 'AUTH/SET-USER-DATA':
        case 'AUTH/SET-AUTH-ERROR':
        case 'AUTH/SET-CAPTCHA-URL':
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
export type SetCaptchaUrlAC = ReturnType<typeof setCaptchaUrlAC>
export const setCaptchaUrlAC = (captchaUrl: string | null) => {
    return {
        type: 'AUTH/SET-CAPTCHA-URL',
        payload: {
            captchaUrl
        }
    } as const
}
// export type LogoutACType = ReturnType<typeof setUserDataAC>
// export const logoutAC = () => {
//     return {
//         type: 'LOGOUT'
//     } as const
// }

export type AuthUnionACType = SetUserDataACType | SetAuthErrorACType | SetCaptchaUrlAC

export default authReducer;

export const authMeTC = (): AppThunk =>
    async (dispatch) => {
        try {
            const response = await authAPI.authMe()
            if (response.resultCode === 0) {
                const data = response.data
                // alert('data.id = ' + data.id)
                dispatch(setUserDataAC(data.id, data.email, data.login, true))
            }
        } catch (e) {
            console.error('something wrong, e = ', e)
        }
    }


export const loginTC = (email: string, password: string, rememberMe: boolean, captcha?: string | null): AppThunk =>
    async (dispatch) => {
        dispatch(setAuthErrorAC(null))
        try {
            const response = await authAPI.login(email, password, rememberMe, captcha)
            // console.log('then in reducer ', response)
            if (response.resultCode === 0) {
                dispatch(authMeTC())
            } else {
                if (response.resultCode === 10) {
                    dispatch(getCaptchaUrl())
                }
                const message = response.messages.length ? response.messages[0] : 'some error'
                dispatch(setAuthErrorAC(message))
            }
        } catch (e) {
            console.error('something wrong, e = ', e)
        }
    }
export const logoutTC = (): AppThunk =>
    async (dispatch) => {
        try {
            const response = await authAPI.logout()
            if (response.resultCode === 0) {
                dispatch(setUserDataAC(0, '', '', false))
            }
        } catch (e) {
            console.error('something wrong, e = ', e)
        }
    }
export const getCaptchaUrl = (): AppThunk =>
    async (dispatch) => {
        dispatch(setAuthErrorAC(null))
        try {
            const data = await authAPI.getCaptchaUrl()
            const captchaUrl = data.url
            dispatch(setCaptchaUrlAC(captchaUrl))
        } catch (e) {
            console.error('something wrong, e = ', e)
        }
    }