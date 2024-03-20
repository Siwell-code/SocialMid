import React from 'react';
import MyPosts from './My posts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile() {
  return (
    <div>
      <ProfileInfo />
      <div >
        <img className={s.img} src={img} />
      </div>
      <div>
        ava + des
      </div>
      <MyPosts />
    </div>);
}

export default Profile;