import React from "react";
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Massage from "./Massage/Message"
import {Navigate, redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const Dialogs = (props) => {

    let state=props.dialogsPages;



    let dialogsElements=state.dialogs.map(d =>{
       return <DialogsItem  name={d.name} id={d.id} key={d.id} className={s.dialogsItems}/>

    })

    let messegesElements=state.messages.map(m => {
        return <Massage key={m.id} message={m.message} key={m.id}className={s.messages} />
    })

    let newMasageBody=state.newMessageBody;





    const addNewMessage =(values)=>{
        props.sendMessage(values.newMasageBody)
    }

// if(!props.isAuth){
//     return <Navigate  to="/login"/ >
// }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {/*<DialogsItem name={DialogsData[0].name} id={DialogsData[0].id}/>*/}
                {/*<DialogsItem name={DialogsData[1].name} id={DialogsData[1].id}/>*/}
                {/*<DialogsItem name={DialogsData[2].name} id={DialogsData[2].id}/>*/}
                {/*<DialogsItem name={DialogsData[3].name} id={DialogsData[3].id}/>*/}
                {/*<DialogsItem name={DialogsData[4].name} id={DialogsData[4].id}/>*/}


                {dialogsElements}

            </div>
            <div className={s.messages}>

                {/*<Massage message={messagesData[0].message}/>*/}
                {/*<Massage message={messagesData[1].message}/>*/}
                {/*<Massage message={messagesData[2].message}/>*/}
                {/*<Massage message={messagesData[3].message}/>*/}
                {/*<Massage message={messagesData[4].message}/>*/}

                {messegesElements}


            </div>

            <AddMessageFormRedux onSubmit={addNewMessage} />

        </div>
    )

}


const AddMessageForm =(peops)=>{

    return(
        <form onSubmit={peops.handleSubmit}>

            {/*<Field placeholder={"Enter your Massage"} component={"textarea"} name={"newMasageBody"}/>*/}
            <Field placeholder={"Enter your Massage"} component={Textarea} name={"newMasageBody"} validate={[required,maxLengthCreator(50)]}/>
            <div>
                <button>Send Massage</button>
            </div>
        </form>
    )
}


const AddMessageFormRedux =reduxForm({
    form:"dialogAddMessageForm"
})(AddMessageForm)
export default Dialogs;