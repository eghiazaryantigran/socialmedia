import React from "react";
import Pagination from "../common/pagination/Pagination";
import User from "./User";


let Users = ({currentPage,onPageChanged,totalUsersCount,pageSize,users,...props}) => {

    return(
    <div>

        <Pagination currentPage={currentPage}
                    onPageChanged={onPageChanged}
                    totalUsersCount={totalUsersCount}
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