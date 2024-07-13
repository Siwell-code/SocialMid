import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './My posts/MyPostsContainer';

function Profile(props) {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer />
    </div>);
}

export default Profile;