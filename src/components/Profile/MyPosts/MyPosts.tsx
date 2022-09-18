import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';
import {MyPostsPropsType} from './MyPostsContainer';
import PostForm from '../../Forms/PostForm/PostForm';


class MyPosts extends React.PureComponent<MyPostsPropsType> {

    /*componentDidMount() {
        console.log('MOUNTED')
        setTimeout(() => {
            this.setState({
                a: 15
            })
        }, 5000)
    }*/

    /*componentDidUpdate(prevProps: Readonly<MyPostsPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        console.log('Updated')
    }*/

    /*shouldComponentUpdate(nextProps: Readonly<MyPostsPropsType>, nextState: Readonly<{}>, nextContext: any): boolean {
        console.log('SHOULD UPDATE')
        return nextProps !== this.props || nextState !== this.state
    }*/

    render() {
        // console.log('RENDER')

        const postsData = this.props.posts;
        const postsJSX = postsData.map(p => <Post key={p.id} id={p.id} message={p.message} likeCount={p.likeCount}/>)

        const onAddPost = (text: string) => {
            this.props.addPost(text)
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
}

export default MyPosts;