import React from "react";
import s from './News.module.css'
import {NavLink} from "react-router-dom";

const News = () => {

    return(
        <div>
            <NavLink to={"https://news.am/arm/"} className={s.img}>
                <img src="https://news.am/css/images/mobile/logo-mobile.png" alt="" width={100}/>
            </NavLink>

            <NavLink to={"https://www.azatutyun.am/"} className={s.img}>
                <img src="https://www.azatutyun.am/Content/responsive/RFE/hy-AM/img/logo-compact.svg" alt="" width={100}/>
            </NavLink>


            <NavLink to={"https://armtimes.com/hy"} className={s.img}>
                <img src="https://www.freenews.am/uploads/logo/logo_60864be299c8d.png" alt="" width={100}/>

            </NavLink>


        </div>
    )



}

export default News;