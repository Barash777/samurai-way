import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
    return (
        <div>
            My posts
            <div>
                New posts
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