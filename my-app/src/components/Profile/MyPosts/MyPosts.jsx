import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
    <div>My posts </div>
    <textarea></textarea>
    <button>Add post</button>
    <button>Remove</button>
    <div className={s.posts}>
    <Post message='Hi, how are you?'/>
    <Post message='It_s my fist message.' counter='15'/>
  </div>
    </div>)
}

export default MyPosts;