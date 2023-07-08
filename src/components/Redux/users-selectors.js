import {createSelector} from "reselect";

 const GetUsersSelector=(state)=>{
    return state.usersPage.users;
}

export const GetUsers=createSelector(GetUsersSelector,(users)=>{
    return users.filter(u=>true)

})

export const GetPageSize=(state)=>{
    return state.usersPage.pageSize;
}

export const GetTotalUsersCount=(state)=>{
    return state.usersPage.totalUsersCount;
}

export const GetCurrentPage=(state)=>{
    return state.usersPage.currentPage;
}

export const GetisFetching=(state)=>{
    return state.usersPage.isFetching;
}

export const GetfallowingInProgress=(state)=>{
    return state.usersPage.fallowingInProgress;
}