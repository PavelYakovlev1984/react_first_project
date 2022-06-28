import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from'./Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";

const Profile = (props) => {let postsElements = props.state.posts.map(
    p => <Post message={p.message} likesCount={p.likesCount}/>
)

  return (
    <div>
      <ProfileInfo />
    <MyPosts posts={props.state.posts} addPost={props.addPost}/>
    </div>)
}

export default Profile;