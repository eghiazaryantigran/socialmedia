import {profileAPI, userAPI} from "../../api/api";

const Add_post="ADD-POST";

// const Updatneposttext="UPDATE-NEW-POST-TEXT";


const SET_USER_PROFILE ="SET_USER_PROFILE";

const SET_STATUS="SET_STATUS"


let initialState={
    posts: [
        {
            id: 1,
            message: "Hi,how are yoy",
            likeCounts: 11
        }
        , {
            id: 2,
            message: "it's,my first post !'",
            likeCounts: 23
        },
        {
            id: 3,
            message: "'\'I\'s,my first post URAAA!'",
            likeCounts: 23
        },
    ],
    // newPostText: "Es im anush hayastan",
    profile: null,
    status:""
}
 const profileReducer = (state=initialState,action)=> {
     switch (action.type) {
         case Add_post: {
             let newPost = {
                 id: 5,
                 message: action.newPostText,
                 likeCounts: 110
             };

            return{...state,posts:[...state.posts,newPost],newPostText:""}

         }
         // case Updatneposttext: {
         //     return{...state,newPostText:action.newText}
         //     // stateCopy.newPostText
         // }

         case SET_USER_PROFILE: {
             return{...state,profile:action.profile}
             // stateCopy.newPostText
         }

         case SET_STATUS: {
             return{...state,status:action.status}
             // stateCopy.newPostText
         }

         default:
             return state
     }


 }
export const addPostActionCreator =(newPostText)=>({type:Add_post,newPostText})
export const SetUserProfile =(profile)=>({type:SET_USER_PROFILE,profile})
export const SetStatus =(status)=>({type:SET_STATUS,status})

//thunk
export const getUserProfile =(userId)=>(dispatch)=>{
    userAPI.getProfile(userId).then(response => {
        dispatch(SetUserProfile(response.data))

    })

}

export const getStatus =(userId)=>(dispatch)=>{
    profileAPI.getStatus(userId).then(response => {
        dispatch(SetStatus(response.data))

    })

}
export const updateStatus =(status)=>(dispatch)=>{
    profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode===0){
            dispatch(SetStatus(status))
        }
    })

}

//end thunk
// export const UpdateNewPostTextCreator =(text)=> ({type:Updatneposttext, newText:text})
export default profileReducer;