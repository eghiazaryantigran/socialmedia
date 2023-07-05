import React from "react";
import {
    follow, getUsers,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    toggleFallowingProgress,
    toggleisFetching,
    unfollow
} from "../Redux/users_reducer";
import loader from "../../assac/images/loader.gif";
import {connect} from "react-redux";

import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {userAPI} from "../../api/api";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.getUsers(this.props.currentPage,this.props.pageSize);

    }

    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber,this.props.pageSize);



    }

    render() {


        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   fallowingInProgress={this.props.fallowingInProgress}
            />
        </>
    }

}

let mapStateTopProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        fallowingInProgress: state.usersPage.fallowingInProgress,

    }

}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userid) => {
//             dispatch(followAc(userid))
//         },
//         unfollow: (userid) => {
//             dispatch(unfollowAc(userid))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAc(users))
//         },
//
//         setCurrentPage: (pagenumber) => {
//             dispatch(setCurrentPageAc(pagenumber))
//         },
//
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAc(totalCount))
//         },
//
//         toggleisFetching: (isFetching) => {
//             dispatch(TOGGLE_IS_FEATCHINGAc(isFetching))
//         }
//
//     }
// }



 // let withRedirect=withAuthRedirect(UsersContainer)
export default compose(
    // withAuthRedirect, //toxum enq vor karanan mtnen naen
    connect(mapStateTopProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFallowingProgress,
        getUsers,
    }),
)(UsersContainer)