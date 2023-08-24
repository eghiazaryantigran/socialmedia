import {React,useRef} from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWhiteHooks from "./ProfileStatusWhiteHooks";
import user_defalt from "../../../assac/images/user.png"
import photoUplode from "../../../assac/images/photoUploade.png"


const ProfileInfo = (props) => {
    const fileInputRef = useRef(null);

if (!props.profile){
    return
        <Preloader />

}

const onmainPhotoSelected=(e)=>{

    if(e.target.files.length){
        props.savePhoto(e.target.files[0])
    }
    }


    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div>
            <div className={s.descriptionBlog}>

                <div className={s.gradient_info}>
                    <img src={props.profile.photos.large || user_defalt } className={s.UserPhoto}/>
                    {props.isOwner &&

                        <button className={s.custom_button} onClick={handleButtonClick}>
                            <img src={photoUplode} alt=""/>
                            <p>Select File</p>
                                <input type="file" onChange={onmainPhotoSelected} ref={fileInputRef}
                                       style={{display:"none"}}
                                 />
                         </button>

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