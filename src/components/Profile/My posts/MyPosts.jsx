import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts(props) {

    let postData = [
        { id: 1, message: 'HI', likesCount: 12 },
        { id: 2, message: 'Hi, how are you?', likesCount: 1 }
    ]

    return (
        <div className={s.Mypost}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea> </textarea>
                </div>
                <div>


                    <button> Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={postData[0].message} likesCount={postData[0].likesCount} />
                <Post message={postData[1].message} likesCount={postData[1].likesCount} />
            </div>
        </div>);
}

export default MyPosts;