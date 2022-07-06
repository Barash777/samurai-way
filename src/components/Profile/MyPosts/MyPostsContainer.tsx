import React from 'react';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';


function MyPostsContainer() {
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
}

export default MyPostsContainer;