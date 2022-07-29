const initialState = {
    userId: 0,
    email: '',
    login: ''
}

export type AuthInitialStateType = typeof initialState

const authReducer = (state: AuthInitialStateType = initialState, action: AuthUnionACType): AuthInitialStateType => {

    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data
            }

        default:
            return state
    }

}

export type SetUserDataACType = ReturnType<typeof setUserDataAC>
export const setUserDataAC = (userId: number, email: string, login: string) => {
// export const setUserDataAC = (data: AuthInitialStateType) => {
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