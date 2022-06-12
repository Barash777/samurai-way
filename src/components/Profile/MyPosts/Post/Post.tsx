import React from 'react';
import css from './Post.module.css';
import {PostPropsType} from '../../../../Types';


function Post(props: PostPropsType) {
    return (
        <div key={props.id} className={css.item}>
            <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/c/ce/Aang.png/280px-Aang.png" alt=""/>
            {props.message}
            <div>{props.likeCount}<span> like(s)</span></div>
        </div>
    );
}

export default Post;