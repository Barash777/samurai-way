import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';
import {MyPostsPropsType} from './MyPostsContainer';
import PostForm from '../../Forms/PostForm/PostForm';


function MyPosts(props: MyPostsPropsType) {

    const postsData = props.posts;
    const postsJSX = postsData.map(p => <Post key={p.id} id={p.id} message={p.message} likeCount={p.likeCount}/>)

    const onAddPost = (text: string) => {
        props.addPost(text)
    }


    return (
        <div className={css.postsBlock}>
            <h3>My posts</h3>
            <PostForm addNewPost={onAddPost}/>
            <div className={css.posts}>
                {postsJSX}
            </div>
        </div>
    );
}

export default MyPosts;