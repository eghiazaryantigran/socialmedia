import React from "react";

import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus,} from "../Redux/profile_reducer";
import {redirect, useParams} from "react-router-dom";
import {compose} from "redux";

const withRouter = WrappedComponent => props => {
    const params = useParams();
    // etc... other react-router-dom v6 hooks
    return (
        <WrappedComponent
            {...props}
            params={params}
            // etc...
        />
    );
};

class ProfileContainer extends React.Component{

    componentDidMount() {
        debugger
        let userId = this.props.params.userId;
        if (!userId) {
            // userId = 29071;
            userId= this.props.authorizedUserId
            if(!userId){
                // this.props.history.push("/login")
                return redirect("/login");

            }
        }


        this.props.getUserProfile(userId)

        this.props.getStatus(userId)
    }

    render() {
                return (
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
                )

                }
                }






let mapStateToProps=(state)=>({
    profile:state.profilePage.profile,
    status:state.profilePage.status,
    authorizedUserId:state.auth.userId,
    isAuth:state.auth.isAuth
})


                export default compose(
                    connect(mapStateToProps,{getUserProfile,getStatus,updateStatus}),
                    withRouter,
                    // withAuthRedirect,
                )(ProfileContainer)





