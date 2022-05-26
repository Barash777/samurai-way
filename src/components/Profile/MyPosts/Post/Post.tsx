import React from 'react';
import css from './Post.module.css';

function Post() {
    return (
        <div className={css.item}>
            <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/c/ce/Aang.png/280px-Aang.png" alt=""/>
            Post1
        </div>
    );
}

export default Post;