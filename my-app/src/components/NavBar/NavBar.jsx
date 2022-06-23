import React from 'react';
import s from'./NavBar.module.css';

const NavBar = () => {
    return (<nav className={s.navBar}>
    <div className={s.item}>
        <a href="/profile">Profile</a>
    </div>
    <div className={`${s.item} ${s.active}`}>
        <a href="/dialogs">Messages</a>
    </div>
    <div className={s.item}>
    News</div>
    <div className={s.item}>
    Music</div>
    <div className={s.item}>
    Settings</div>
    </nav>)

}

export default NavBar;