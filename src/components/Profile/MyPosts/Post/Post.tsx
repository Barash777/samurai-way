import React from 'react';
import css from './Post.module.css';

type PropsType = {
    message: string
    likeCount: number
}

function Post(props: PropsType) {
    return (
        <div className={css.item}>
            <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/c/ce/Aang.png/280px-Aang.png" alt=""/>
            {props.message}
            <div>{props.likeCount}<span> like(s)</span></div>
        </div>
    );
}

export default Post;