import {userAPI} from "../../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_Count="SET_TOTAL_USERS_Count"
const TOGGLE_IS_FEATCHING="TOGGLE_IS_FEATCHING"
const TOGGLE_IS_FALLOWING_PROGRESS ="TOGGLE_IS_FALLOWING_PROGRESS";


let initialState = {
    users: [],
    pageSize:5,
    totalUsersCount:0,
    currentPage:1,
    isFetching :false,
    fallowingInProgress: []



}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {

                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })


            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {

                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })


            }

        case SETUSERS:

            return {
                ...state, users:action.users
            }


        case SET_CURRENT_PAGE: {

            return {
                ...state, currentPage: action.currentPage
            }
        }


        case SET_TOTAL_USERS_Count: {

            return {
                ...state, totalUsersCount: action.count
            }
        }

        case TOGGLE_IS_FEATCHING: {

            return {
                ...state, isFetching:action.isFetching
            }
        }

        case TOGGLE_IS_FALLOWING_PROGRESS: {

            return {
                ...state,
                 fallowingInProgress:action.isFetching
                     ? [...state.fallowingInProgress,action.userId]
                    :  state.fallowingInProgress.filter(id=>id !=action.userId)
            }
        }
    }

    return state
}
export const followSuccses = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccses = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SETUSERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_Count, count:totalUsersCount})
export const toggleisFetching = (isFetching) => ({type: TOGGLE_IS_FEATCHING, isFetching})
export const toggleFallowingProgress = (isFetching,userId) => ({type: TOGGLE_IS_FALLOWING_PROGRESS, isFetching,userId})



export const getUsers=(currentPage,pageSize)=> {
   return (dispatch) => {
        dispatch(toggleisFetching(true))

        userAPI.getUsers(currentPage,pageSize).then(data => {
            dispatch(toggleisFetching(false))

            dispatch(setUsers(data.items))
            dispatch(setUsersTotalCount(data.totalCount))
        })
    }
}


export const follow=(userId)=> {
    return (dispatch) => {
       dispatch(toggleFallowingProgress(true,userId))
        userAPI.getFollow(userId)
            .then(data => {

                if(data.resultCode==0){
                    dispatch(followSuccses(userId))
                }
                dispatch(toggleFallowingProgress(false,userId))
            })
    }
}


export const unfollow=(userId)=> {
    return (dispatch) => {
        dispatch(toggleFallowingProgress(true,userId))
        userAPI.getUnFollow(userId)
            .then(data => {

                if(data.resultCode==0){
                    dispatch(unfollowSuccses(userId))
                }
               dispatch(toggleFallowingProgress(false,userId));
            })



    }
}

export default usersReducer;