export type PostPropsType = {
    id: number
    message: string
    likeCount: number
}

export type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: AllActionsType) => void
    // addPost: () => void
    // updateNewPostText: (newPostText: string) => void
}

export type ProfilePageType = {
    posts: Array<PostPropsType>
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessageItemPropsType>
}

export type SidebarType = {}

export type ActionNameType = 'ADD-POST' | 'UPDATE-NEW-POST-TEXT'

export type AllActionsType = AddPostActionType | UpdateNewPostTextActionType

/*export type ActionType = {
    type: ActionNameType,
    // newText?: string
}*/

export type AddPostActionType = {
    type: 'ADD-POST'
}

export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: () => void
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: AllActionsType) => void
}


export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type AppPropsType = {
    state: StateType
    dispatch: (action: AllActionsType) => void
    // addPost: () => void
    // updateNewPostText: (newPostText: string) => void
}

export type DialogsPropsType = {
    dialogsPage: DialogsPageType
}

export type MessageItemPropsType = {
    text: string,
    id: number
}

export type DialogItemPropsType = {
    name: string,
    id: number
}

export type MyPostsType = {
    posts: Array<PostPropsType>
    newPostText: string
    dispatch: (action: AllActionsType) => void
    // addPost: () => void
    // updateNewPostText: (newPostText: string) => void
}