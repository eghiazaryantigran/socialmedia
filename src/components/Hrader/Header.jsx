import React from "react";
import h from "../Header.module.css";
import {NavLink} from "react-router-dom";
import logo from "../../assac/images/SOC-Logo.png"


const Header = (props) => {
    return(

    <header className={h.header}>

        <NavLink to={"/profile"}><img src={logo} alt=""/></NavLink>

        <div className={h.loginBlock}>
            {props.isAuth ? <div className={h.loginNAme}> {props.login} <button onClick={props.logout} className={h.log_out}>LOGOUT</button></div>
           : <NavLink to={"/login"}>Login</NavLink>}
        </div>
    </header>

    )
}




export default Header;