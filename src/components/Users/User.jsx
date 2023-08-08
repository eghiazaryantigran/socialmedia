import React from "react";
import styles from "./Users.module.css";
import userphoto from "../../assac/images/user.png";
import {NavLink} from "react-router-dom";


let User = ({user,fallowingInProgress,unfollow,follow}) => {
    return(
       <div>

                    <span>43
                        <div>
                            <NavLink to={'/profile/'+user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userphoto} alt=""
                                 className={styles.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button disabled={fallowingInProgress.some(id=>id===user.id)} onClick={() => {
                                    unfollow(user.id)}}>unfollow</button>
                                : <button disabled={fallowingInProgress.some(id=>id===user.id)} onClick={() => {
                                   follow(user.id)}}>follow</button>}
                            {}
                        </div>

                    </span>
                <span>
                            <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                            </span>
                        </span>
                <span>
    <div>{"user.location.city"}</div>
    <div>{"user.location.country"}</div>
</span>
            </div>
    )
        }




export default User;