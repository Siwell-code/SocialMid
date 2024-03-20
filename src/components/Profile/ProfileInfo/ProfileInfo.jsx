import React from 'react';
import s from './ProfileInfo.module.css';
import img from '../../../img/snezhnye_gory_na_fone_vechernego_neba-2560x1707 (1).jpg';

export function ProfileInfo () {
  return (
    <div>
      <div >
        <img className={s.img} src={img} />
      </div>
      <div>
        ava + des
      </div>
    </div>);
}



export default ProfileInfo;