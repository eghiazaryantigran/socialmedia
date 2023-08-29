import React from "react";
import p from "../Profile.module.css";
import MyPosts from "./MyyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div>

           <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner}  savePhoto={props.savePhoto} saveProfile={props.saveProfile}/>
            <MyPostsContainer/>

        </div>

    )
}

export default Profile;