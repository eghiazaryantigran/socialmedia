import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import {updateStatus} from "../../Redux/profile_reducer";



const ProfileInfo = (props) => {

if (!props.profile){
    return
        <Preloader />

}

    return (
        <div>
            {/*<div className={s.bgimg}>*/}
            {/*    <img*/}
            {/*        src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2017/02/Photoshop-Replace-Background-Featured.jpg"*/}
            {/*        alt=""/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlog}>

     <img src={props.profile.photos.large} className={s.UserPhoto}/>
                <div>
                    <ul>
                        <li>{props.profile.fullName}</li>

                        <li>{props.profile.aboutMe}</li>
                        <li>{props.profile.contacts.twitter}</li>
                        <li>{props.profile.lookingForAJobDescription}</li>
                        <li>id {props.profile.userId}</li>

                    </ul>
                </div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>



        </div>

    )
}

export default ProfileInfo;