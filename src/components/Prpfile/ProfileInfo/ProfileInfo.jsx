import {React, useRef, useState} from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWhiteHooks from "./ProfileStatusWhiteHooks";
import user_defalt from "../../../assac/images/user.png"
import photoUplode from "../../../assac/images/photoUploade.png"
import ProfileDataForm from "../ProfileDataForm";
import edit from "../../../assac/images/edit-24.png"

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    const[EditMode,SetEditMode]=useState(false)

    const fileInputRef = useRef(null);

if (!profile){
    return
        <Preloader />

}

const onmainPhotoSelected=(e)=>{

    if(e.target.files.length){
        savePhoto(e.target.files[0])
    }
    }


    const handleButtonClick = () => {
        fileInputRef.current.click();
    };


    const ourSubmit = (formData) => {
        // Assuming saveProfile returns a Promise
        saveProfile(formData)
            .then(() => {
                SetEditMode(false);
            })

    };

    return (
        <div>
            <div className={s.descriptionBlog}>

                <div className={s.gradient_info}>
                    <img src={profile.photos.large || user_defalt } className={s.UserPhoto}/>
                    {isOwner &&

                        <button className={s.custom_button} onClick={handleButtonClick}>
                            <img src={photoUplode} alt=""/>
                            <p>Select File</p>
                                <input type="file" onChange={onmainPhotoSelected} ref={fileInputRef}
                                       style={{display:"none"}}
                                 />
                         </button>

                    }
                    {EditMode ?
                        <ProfileDataForm initialValues={profile} onSubmit={ourSubmit} profile={profile}/>
                    :
                        <ProfileData profile={profile}
                                     isOwner={isOwner}
                                     goToEditMode={()=>{SetEditMode(true)}}

                        />
                    }
                    <div>
                        <ProfileStatusWhiteHooks status={status} updateStatus={updateStatus} />
                    </div>

                </div>




            </div>



        </div>

    )
}

export const ProfileData=({profile,isOwner,goToEditMode})=>{
    return(
        <div>
            {isOwner &&
<div>
    <button onClick={goToEditMode} className={s.icons_do_somting}>
        <img src={edit}/>
    </button>
</div>
            }
            <div>
                <b>Full Name:</b> {profile.fullName}
            </div>

            <div>
                <b>Loking for a job</b>{profile.lookingForAJob ? " yes" : " no"}
            </div>
            {profile.lookingForAJob &&
                <div>
                    <b>My professional skills :</b><b>{profile.lookingForAJobDescription}</b>
                </div>
            }
            <div>
                <b>About me:{profile.aboutMe}</b>
            </div>


            {/*<div>*/}
            {/*    id {props.profile.userId}*/}
            {/*</div>*/}

            <div>
                <b>Contacts</b>: {Object.keys(
                profile.contacts).map(p=>{
                return(
                    <Contact key={p} contactTitle={p} ContactValue={profile.contacts[p]}/>
                )
            })}
            </div>

        </div>
    )
}


export const Contact=({contactTitle,ContactValue})=> {
    return (
    <div className={s.contact}>
        <b>{contactTitle}</b>:{ContactValue}
    </div>
)
}
export default ProfileInfo;