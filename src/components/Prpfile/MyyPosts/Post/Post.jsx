import React from "react";
import p from "./Post.module.css";


const Post = (props) => {

    return (
        <div className={p.content}>

                <div className="posts">
                    <div className={p.item}>
                        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoqWIPKg9kRQhn9r3qgpcRSACAXvg-dbTOWQiDN6b5ahLRZ-AU_ioL_uXv5Un0kNGPNhE&usqp=CAU" alt=""/>
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