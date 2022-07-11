import React, {ChangeEvent} from 'react';
import css from './MyPosts.module.css';
// import {MyPostsType} from '../../../Types';
import Post from './Post/Post';
import {MyPostsPropsType} from './MyPostsContainer';


function MyPosts(props: MyPostsPropsType) {

    const postsData = props.posts;
    const postsJSX = postsData.map(p => <Post key={p.id} id={p.id} message={p.message} likeCount={p.likeCount}/>)

    const onAddPost = () => {
        props.addPost()
    }

    const onChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={css.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        value={props.newPostText}
                        onChange={onChangeTextArea}
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={css.posts}>
                {postsJSX}
            </div>
        </div>
    );
}

export default MyPosts;