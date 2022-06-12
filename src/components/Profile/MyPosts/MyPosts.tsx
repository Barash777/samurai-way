import React from 'react';
import css from './MyPosts.module.css';
import {MyPostsType} from '../../../Types';
import Post from './Post/Post';


function MyPosts(props: MyPostsType) {

    // const postsData = state.profilePage.posts;
    //const postsData: Array<PostPropsType> = state.profilePage.posts;
    const postsData = props.posts;

    const postsJSX = postsData.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {

        // let text = newPostElement.current?.value;
        // props.addPost(String(text))

        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
            // newPostElement.current?.value = '';
            newPostElement.current.value = ''
        }
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
                    {/*<button onClick={() => props.addPost(newPostElement.current?.value.toString())}>Add post</button>*/}
                </div>
            </div>
            <div className={css.posts}>
                {postsJSX}
            </div>
        </div>
    );
}

export default MyPosts;