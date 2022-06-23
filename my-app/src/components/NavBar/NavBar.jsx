import React from 'react';
import s from'./NavBar.module.css';

// let s = {
//   'nav' : 'NavBar_navBar__Fh58k',
//   'item' : 'NavBar_item__1XDTU'
// }

const NavBar = () => {
    return (<nav className={s.navBar}>
    <div className={s.item}>
    Profile
    </div>
    <div className={`${s.item} ${s.active}`}>
    Messages</div>
    <div className={s.item}>
    News</div>
    <div className={s.item}>
    Music</div>
    <div className={s.item}>
    Settings</div>
    </nav>)

}

export default NavBar;