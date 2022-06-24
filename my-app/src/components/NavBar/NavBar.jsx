import React from 'react';
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={s.navBar}>
            <div className={s.item}>
                <NavLink to="/profile" className={(navData) => navData.isActive ? "activeLink" : "item" }>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.activeLink}`}>
                <NavLink className={(navData) => navData.isActive ? "activeLink" : "item" } to="/dialogs" >Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={(navData) => navData.isActive ? "activeLink" : "item" }>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
            </div>
        </nav>
    )

}

export default NavBar;