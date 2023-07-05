import React, {useState} from "react";
import s from "../Navbar.module.css";
import {NavLink} from "react-router-dom";
import {useLocation} from "react-router-dom";

const Navbar = () => {



    return (

        <nav className={s.nav}>
            <div className={`${s.item}`}><NavLink to="/profile" className={(navigationData) => navigationData.isActive ? s.active : s.item } >Profile</NavLink></div>
            <div className={`${s.item} ${s.activ}`} ><NavLink to="/dialogs" className={(navigationData) => navigationData.isActive ? s.active : s.item } >Messages</NavLink></div>
            <div className={s.item}><NavLink to="/users" className={(navigationData) => navigationData.isActive ? s.active : s.item } >Users</NavLink></div>

            <div className={s.item}><NavLink to="/news" className={(navigationData) => navigationData.isActive ? s.active : s.item } >News</NavLink></div>
            <div className={s.item}><NavLink to="/music" className={(navigationData) => navigationData.isActive ? s.active : s.item } >Music</NavLink></div>
            <div className={s.item}><NavLink to="/setings" className={(navigationData) => navigationData.isActive ? s.active : s.item } >Setings</NavLink></div>

        </nav>
    )
}

export default Navbar;