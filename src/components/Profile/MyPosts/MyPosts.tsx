import React from 'react';
import css from './MyPosts.module.css';
import Post, {PostPropsType} from './Post/Post';

function MyPosts() {

    let postsData: Array<PostPropsType> = [
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

    const postsJSX = postsData.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>)

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
                {postsJSX}
            </div>
        </div>
    );
}

export default MyPosts;