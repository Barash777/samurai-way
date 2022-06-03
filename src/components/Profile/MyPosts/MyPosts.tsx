import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
    return (
        <div className={css.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={css.posts}>
                <Post message={'Hello!'} likeCount={12}/>
                <Post message={'Wow'} likeCount={5}/>
                <Post message={'It\'s my first message. Stop it!'} likeCount={37}/>
            </div>
        </div>
    );
}

export default MyPosts;