import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWhiteHooks from "./ProfileStatusWhiteHooks";
import user_defalt from "../../../assac/images/user.png"


const ProfileInfo = (props) => {

if (!props.profile){
    return
        <Preloader />

}

const onmainPhotoSelected=(e)=>{

    if(e.target.files.length){
        props.savePhoto(e.target.files[0])
    }
    }

    return (
        <div>
            <div className={s.descriptionBlog}>

                <div className={s.gradient_info}>
                    <img src={props.profile.photos.large || user_defalt } className={s.UserPhoto}/>
                    {props.isOwner &&
                            <input type="file" onChange={onmainPhotoSelected}/>
                    }

                    <div>
                        <ul>
                            <li>{props.profile.fullName}</li>

                            <li>{props.profile.aboutMe}</li>
                            <li>{props.profile.contacts.twitter}</li>
                            <li>{props.profile.lookingForAJobDescription}</li>
                            <li>id {props.profile.userId}</li>

                        </ul>
                    </div>
                </div>



                <ProfileStatusWhiteHooks status={props.status} updateStatus={props.updateStatus} />
            </div>



        </div>

    )
}

export default ProfileInfo;