import React from "react";
import User from "./User";
import Paginator from "../common/pagination/Pagination";


let Users = ({currentPage,onPageChanged,totalUsersCount,pageSize,users,...props}) => {

    return(
    <div>

        <Paginator currentPage={currentPage}
                    onPageChanged={onPageChanged}
                    totalItemsCount={totalUsersCount}
                    pageSize={pageSize}
        />
        <div>
        {
            users.map(u =><User  key={u.id}
                                 user={u}
                                 fallowingInProgress={props.fallowingInProgress}
                                 unfollow={props.unfollow}
                                 follow={props.follow} />)

        }
        </div>
    </div>
    )
}


export default Users;