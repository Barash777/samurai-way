import {AppThunk} from './redux-store';
import {authMeTC} from './authReducer';

export type InitializedType = 'idle' | 'loading' | 'success' | 'failed'
const initialState = {
    initialized: 'idle' as InitializedType
}

export type AppInitialStateType = typeof initialState

const appReducer = (state: AppInitialStateType = initialState, action: AppUnionACType): AppInitialStateType => {

    switch (action.type) {
        case 'APP/SET-INITIALIZED':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }

}

export type SetInitializedACType = ReturnType<typeof setInitializedAC>
export const setInitializedAC = (initialized: InitializedType) => {
    return {
        type: 'APP/SET-INITIALIZED',
        payload: {
            initialized
        }
    } as const
}


export type AppUnionACType = SetInitializedACType

export default appReducer;

export const initializeTC = (): AppThunk =>
    (dispatch) => {

        dispatch(setInitializedAC('loading'))
        Promise.all([dispatch(authMeTC())])
            .then(() => {
                dispatch(setInitializedAC('success'))
            })
            .catch(() => {
                dispatch(setInitializedAC('failed'))
            })


    }