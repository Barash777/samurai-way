import React from 'react';
import css from './MyPosts.module.css';
import Post, {PostPropsType} from './Post/Post';

function MyPosts() {

    let postData: Array<PostPropsType> = [
        {
            id: 1,
            message: 'Hello',
            likeCount: 12
        },
        {
            id: 2,
            message: 'Wow',
            likeCount: 25
        },
        {
            id: 3,
            message: 'OK',
            likeCount: 37
        }
    ]

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
                <Post id={postData[0].id} message={postData[0].message} likeCount={postData[0].likeCount}/>
                <Post id={postData[1].id} message={postData[1].message} likeCount={postData[1].likeCount}/>
                <Post id={postData[2].id} message={postData[2].message} likeCount={postData[2].likeCount}/>
            </div>
        </div>
    );
}

export default MyPosts;