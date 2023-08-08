import React from "react";
import p from "./Post.module.css";
import users_defolt_photo_post from "../../../../assac/images/users_defolt_photo_post .png"


const Post = (props) => {

    return (
        <div className={p.content}>

                <div className="posts">
                    <div className={p.item}>
                        <img  src={users_defolt_photo_post} alt=""/>
                        {props.message}
                        <div>
                    <span>LIKE</span> {props.likeCounts}

                        </div>
                    </div>

            </div>
        </div>

    )
}

export default Post;