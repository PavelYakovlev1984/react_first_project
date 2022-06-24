import React from 'react';
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={s.navBar}>
            <div className={s.item}>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs">Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs">News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs">Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs">Settings</NavLink>
            </div>
        </nav>
    )

}

export default NavBar;