import React from 'react';
import s from './Post.module.css'

const Post = (props) => {

    return (
        <div className={s.item}>
            <img src='https://www.piratesofpowder.com/wp-content/uploads/2016/01/What-are-the-Best-Goggles-for-Snowboarding-and-Skiing.jpg' />
            { props.message }
            <div>
                <span>like</span>
            </div>
        </div>
    );
}

export default Post;