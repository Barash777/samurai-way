import React from 'react';
import css from './MyPosts.module.css';
import Post, {PostPropsType} from './Post/Post';

//import state from '../../../redux/state';

type MyPostsType = {
    posts: Array<PostPropsType>
}

function MyPosts(props: MyPostsType) {

    // const postsData = state.profilePage.posts;
    //const postsData: Array<PostPropsType> = state.profilePage.posts;
    const postsData = props.posts;

    const postsJSX = postsData.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        const text = newPostElement.current?.value;
        alert(text)
        // newPostElement.current.value = ''
    }

    return (
        <div className={css.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={css.posts}>
                {postsJSX}
            </div>
        </div>
    );
}

export default MyPosts;