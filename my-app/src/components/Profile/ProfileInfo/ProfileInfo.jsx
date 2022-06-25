import React from 'react';
import s from'./ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXfLigxeMal-4HHhip27gBkMvXs2-3WuTNng&usqp=CAU"
             alt="pic"/>
        <div className={s.descriptionBlock}>ava + descr</div>
      </div>
  )
}

  export default ProfileInfo;