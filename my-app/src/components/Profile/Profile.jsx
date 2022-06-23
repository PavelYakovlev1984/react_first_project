import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from'./Profile.module.css'

const Profile = () => {
  return (
    <div className={s.content}>
    <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXfLigxeMal-4HHhip27gBkMvXs2-3WuTNng&usqp=CAU" alt="pic" />
    <div>ava + descr</div>
    </div>
    <MyPosts />
    </div>)
}

export default Profile;