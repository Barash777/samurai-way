// import React from 'react';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
// import StoreContext from '../../../StoreContext';
import {connect} from 'react-redux';
import {DialogsPageType, DispatchType, PostPropsType, ProfilePageType, StateType} from '../../../Types';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';


/*function MyPostsContainer() {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                const addPost = () => {
                    store.dispatch(addPostAC())
                }

                // const onChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
                const onChangeTextArea = (text: string) => {
                    store.dispatch(updateNewPostTextAC(text))
                }

                return (
                    <MyPosts
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}
                        addPost={addPost}
                        updateNewPostText={onChangeTextArea}
                    />
                )
            }}
        </StoreContext.Consumer>
    );
}*/

type MapStateToPropsType = {
    posts: Array<PostPropsType>
    newPostText: string
}

type MapDispatchToPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
})


const mapDispatchToProps = (dispatch: /*DispatchType*/ Dispatch): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;