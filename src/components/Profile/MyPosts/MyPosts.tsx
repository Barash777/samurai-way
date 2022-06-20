import React, {ChangeEvent} from 'react';
import css from './MyPosts.module.css';
import {MyPostsType} from '../../../Types';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/state';


function MyPosts(props: MyPostsType) {

    // const postsData = state.profilePage.posts;
    //const postsData: Array<PostPropsType> = state.profilePage.posts;
    const postsData = props.posts;

    const postsJSX = postsData.map(p => <Post key={p.id} id={p.id} message={p.message} likeCount={p.likeCount}/>)

    // const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {

        // let text = newPostElement.current?.value;
        // props.addPost(String(text))

        // props.dispatch({type: 'ADD-POST'})
        props.dispatch(addPostActionCreator())

        /*if (newPostElement.current) {
            // props.addPost(newPostElement.current.value)
            props.addPost()
            // props.updateNewPostText('')
        }*/
    }

    const onChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // console.log(newPostElement.current?.value)

        // !!! не хочу прокидывать эту функцию через все компоненты !!!
        // но сделаю это последний раз

        // updateNewPostText()
        /*if (newPostElement.current) {
            props.updateNewPostText(newPostElement.current.value)
        }*/

        // props.updateNewPostText(e.currentTarget.value)

        /*props.dispatch(
            {
                type: 'UPDATE-NEW-POST-TEXT',
                newText: e.currentTarget.value
            }
        )*/

        props.dispatch(updateNewPostTextActionCreator(e.currentTarget.value))
    }

    return (
        <div className={css.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    {/*<textarea ref={newPostElement} value={props.newPostText} onChange={onChangeTextArea}/>*/}
                    <textarea
                        value={props.newPostText}
                        /*onChange={(e) => {
                            props.updateNewPostText(e.currentTarget.value)
                        }}*/
                        onChange={onChangeTextArea}
                    />
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