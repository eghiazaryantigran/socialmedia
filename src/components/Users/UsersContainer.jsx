import React from "react";
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    toggleFallowingProgress,
    toggleisFetching,
    requestUsers,
    unfollow,
} from "../Redux/users_reducer";
import loader from "../../assac/images/loader.gif";
import {connect} from "react-redux";

import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {userAPI} from "../../api/api";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {
    GetCurrentPage,
    GetfallowingInProgress,
    GetisFetching,
    GetPageSize,
    GetTotalUsersCount,
    GetUsers,
} from "../Redux/users-selectors";


class UsersContainer extends React.Component {


    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);

    }

    onPageChanged = (pageNumber) => {

        this.props.requestUsers(pageNumber, this.props.pageSize);


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

// let mapStateTopProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         fallowingInProgress: state.usersPage.fallowingInProgress,
//
//     }
//
// }

let mapStateTopProps = (state) => {
    return {
        // users: state.usersPage.users,
        users: GetUsers(state),
        pageSize: GetPageSize(state),
        totalUsersCount: GetTotalUsersCount(state),
        currentPage: GetCurrentPage(state),
        isFetching: GetisFetching(state),
        fallowingInProgress: GetfallowingInProgress(state)

    }

}


// let withRedirect=withAuthRedirect(UsersContainer)
export default compose(
    // withAuthRedirect, //toxum enq vor karanan mtnen naen
    connect(mapStateTopProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFallowingProgress,
        requestUsers,
    }),
)(UsersContainer)