import {Navigate} from "react-router-dom";

import React from "react";
import {connect} from "react-redux";

let mapStateToPropsForRedirect=(state)=>({
    isAuth:state.auth.isAuth,
})

export const withAuthRedirect =(Comment)=>{

class RedirectComponent extends React.Component{
    render() {
        if(!this.props.isAuth){return <Navigate  to="/login"/ >}

    return <Comment {...this.props} />
    }
}

let ConnectedAuthRedirectComponent =connect (mapStateToPropsForRedirect)(RedirectComponent)

            return ConnectedAuthRedirectComponent

}




