export type LocationType = {
    city: string
    country: string
}

export type PhotosType = {
    small: string
    large: string
}

export type UserType = {
    id: number
    uniqueUrlName: string
    // photoURL?: string
    followed: boolean
    name: string
    status: string
    photos: PhotosType
    location?: LocationType
}

const initialState = {
    users: [
        /*{
            id: 1,
            photoURL: 'https://avatarko.ru/img/kartinka/18/multfilm_minion_17779.jpg',
            followed: true,
            fullName: 'Eric',
            status: 'tra lala al',
            location: {
                city: 'Minsk',
                country: 'Belarus'
            }
        },
        {
            id: 2,
            photoURL: 'https://pngimg.com/uploads/minions/minions_PNG75.png',
            followed: false,
            fullName: 'Oleg',
            status: '... trsdf a lala al',
            location: {
                city: 'Kiev',
                country: 'Ukraine'
            }
        },
        {
            id: 3,
            photoURL: 'https://pngimg.com/uploads/minions/small/minions_PNG86.png',
            followed: true,
            fullName: 'Ivan',
            status: '!!! --- !!!',
            location: {
                city: 'Moscow',
                country: 'Russia'
            }
        },*/
    ] as Array<UserType>
}

export type UsersInitialStateType = typeof initialState

const usersReducer = (state: UsersInitialStateType = initialState, action: UsersUnionACType): UsersInitialStateType => {

    switch (action.type) {
        case 'CHANGE-FOLLOW-STATUS':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: !u.followed} : u)
            }
        case 'SET-USERS':
            return {
                ...state,
                users: [...action.users]
                // users: [...state.users, ...action.users]
            }
        default:
            return state
    }

}

export type ChangeFollowStatusACType = ReturnType<typeof changeFollowStatusAC>
export const changeFollowStatusAC = (userID: number) => {
    return {
        type: 'CHANGE-FOLLOW-STATUS',
        userID
    } as const
}

export type SetUsersACACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}

export type UsersUnionACType = ChangeFollowStatusACType | SetUsersACACType

export default usersReducer;