import React from 'react';
import MyPosts from './My posts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} />
    </div>);
}

export default Profile;