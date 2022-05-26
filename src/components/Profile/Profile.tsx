import React from 'react';
import css from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

function Profile() {
    return (
        <div className={css.profile}>
            <div>
                <img className={css.topImage}
                     src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                     alt=""/>
            </div>
            <div>
                <img className={css.avatar}
                     src="https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg"
                     alt=""/>
            </div>
            <MyPosts/>

        </div>
    );
}

export default Profile;