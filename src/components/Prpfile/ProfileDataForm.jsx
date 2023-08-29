import React from "react";
import {reduxForm, initialize, Field} from "redux-form";
import {createFild, Input, Textarea} from "../common/FormsControls/FormsControls";
import save_icone from "../../assac/images/save-24.png"
import s from "./ProfileInfo/ProfileInfo.module.css";
import {Contact} from "./ProfileInfo/ProfileInfo";
import e from "./../common/FormsControls/FormsControl.module.css"

const ProfileDataForm = ({ handleSubmit, initialValues,profile,error }) => {

    initialize('edit-profile', initialValues);

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button className={s.icons_do_somting}>
                    <img src={save_icone}/>
                </button>
                {error &&
                    <div className={e.formSummaryError} > {error}</div>

                }
            </div>

            <div>
                <b>Full Name:</b> {createFild("", "fullName", [], Input)}
            </div>

            <div>
                <b>Looking for a job</b>
                {createFild("", "lookingForAJob", [], Input, { type: "checkbox" })}
            </div>

            <div>
                <b>My professional skills: </b>
                {createFild("", "lookingForAJobDescription", [], Textarea)}
            </div>

            <div>
                <b>About ME</b>
                {createFild("About me", "aboutME", [], Textarea)}
            </div>

            <div>
                <b>Contacts</b>: {Object.keys(
                profile.contacts).map(p=>{
                return(
                    <div key={p}>
                        <b>{p}:</b>{createFild(p, "contacts."+p, [], Input)}
                    </div>
                )
            })}
            </div>
        </form>
    );
};

const ProfileDataFormReduxForm = reduxForm({
    form: "edit-profile", // Unique form name
    enableReinitialize: true,
    destroyOnUnmount: false// Enable reinitialization
})(ProfileDataForm);

export default ProfileDataFormReduxForm;