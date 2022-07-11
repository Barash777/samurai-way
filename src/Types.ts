import React from 'react';

export type PostPropsType = {
    id: number
    message: string
    likeCount: number
}


export type ProfilePageType = {
    posts: Array<PostPropsType>
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessageItemPropsType>
    newMessageText: string
}

export type SidebarType = {}

// export type ActionNameType = 'ADD-POST' | 'UPDATE-NEW-POST-TEXT' | 'UPDATE-NEW-MESSAGE-TEXT' | 'ADD-MESSAGE'

export type AllActionsType = AddPostActionType |
    UpdateNewPostTextActionType |
    UpdateNewMessageTextActionType |
    AddMessageActionType


export type AddPostActionType = {
    type: 'ADD-POST'
}

export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type UpdateNewMessageTextActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newText: string
}

export type AddMessageActionType = {
    type: 'ADD-MESSAGE'
}

export type DispatchType = (action: AllActionsType) => void


export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: () => void
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
    dispatch: DispatchType
}


export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type DialogsPropsType = {
    dialogsPage: DialogsPageType
    newMessageText: string
    sendMessage: () => void
    onChangeMessage: (text: string) => void
}

export type MessageItemPropsType = {
    text: string,
    id: number
}

export type DialogItemPropsType = {
    name: string,
    id: number
}

export type ProviderType = {
    store: StoreType
    children: React.ReactNode
}