import React from "react";
import {SendMessageCreator} from "../Redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps =(state)=>{
    return {
        dialogsPages: state.dialogsPages,
    }
}
let mapDispatchToProps =(dispatch)=> {

    return {
        sendMessage: (newMasageBody) => {
            dispatch(SendMessageCreator(newMasageBody))
        }
    }
}




export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
;