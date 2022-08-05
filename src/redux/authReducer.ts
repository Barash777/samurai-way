import {Dispatch} from 'redux';
import {authAPI} from '../api/api';

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
                ...action.data,
                isAuth: true
            }

        default:
            return state
    }

}

export type SetUserDataACType = ReturnType<typeof setUserDataAC>
export const setUserDataAC = (userId: number, email: string, login: string) => {
    return {
        type: 'SET-USER-DATA',
        data: {
            userId,
            email,
            login
        }
    } as const
}

export type AuthUnionACType = SetUserDataACType

export default authReducer;

export const authMeTC = () => (dispatch: Dispatch) => {
    authAPI.authMe()
        .then(response => {
            if (response.resultCode === 0) {
                const data = response.data
                dispatch(setUserDataAC(data.id, data.email, data.login))
            }
        });
}