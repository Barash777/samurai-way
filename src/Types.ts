export type PostPropsType = {
    id: number
    message: string
    likeCount: number
}

export type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: (postMessage: string) => void
}

export type ProfilePageType = {
    posts: Array<PostPropsType>
}

export type DialogsPageType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessageItemPropsType>
}

export type SidebarType = {}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type AppPropsType = {
    state: StateType
    addPost: (postMessage: string) => void
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
    addPost: (postMessage: string) => void
}