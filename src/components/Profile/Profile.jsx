import React from 'react';
import MyPosts from './My posts/MyPosts';
import s from './Profile.module.css';
import img from '../../img/snezhnye_gory_na_fone_vechernego_neba-2560x1707 (1).jpg';

function Profile() {
  return (
    <div>
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