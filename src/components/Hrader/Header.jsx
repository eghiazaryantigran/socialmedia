import React from "react";
import h from "../Header.module.css";
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return(

    <header className={h.header}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt=""/>

        <div className={h.loginBlock}>
            {props.isAuth ? <div className={h.loginNAme}> {props.login} <button onClick={props.logout} className={h.log_out}>LOGOUT</button></div>
           : <NavLink to={"/login"}>Login</NavLink>}
        </div>
    </header>

    )
}




export default Header;