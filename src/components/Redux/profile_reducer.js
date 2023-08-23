import {profileAPI, userAPI} from "../../api/api";
import profile from "../Prpfile/Profile";

const Add_post="ADD-POST";

const Delete_Post="Delete_Post";

// const Updatneposttext="UPDATE-NEW-POST-TEXT";


const SET_USER_PROFILE ="SET_USER_PROFILE";

const SET_STATUS="SET_STATUS";

const SAVE_PHOTO_SUCCESS="SAVE_PHOTO_SUCCESS"


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
        {
            id: 4,
            message: "'\'I\'s,happyy!'",
            likeCounts: 28
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

         case Delete_Post: {

            return{...state,posts:state.posts.filter((p=>p.id !== action.postId))}

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

         case SAVE_PHOTO_SUCCESS: {
             return{...state,profile:{...state.profile,photos:action.photos}}
             // stateCopy.newPostText
         }

         default:
             return state
     }


 }
export const addPostActionCreator =(newPostText)=>({type:Add_post,newPostText})
export const SetUserProfile =(profile)=>({type:SET_USER_PROFILE,profile})
export const SetStatus =(status)=>({type:SET_STATUS,status})

export const deletePost =(postId)=>({type:Delete_Post,postId})

export const savePhotoSuccsess =(photos)=>({type:SAVE_PHOTO_SUCCESS,photos})


//thunk
export const getUserProfile =(userId)=>async (dispatch)=>{
    let response= await userAPI.getProfile(userId)

        dispatch(SetUserProfile(response.data))

}

export const getStatus =(userId)=> async (dispatch)=>{
    let response= await  profileAPI.getStatus(userId)
        dispatch(SetStatus(response.data))

}
export const updateStatus =(status)=> async (dispatch)=>{
    let response= await profileAPI.updateStatus(status)
        if(response.data.resultCode===0){
            dispatch(SetStatus(status))
        }


}


export const savePhoto =(file)=> async (dispatch)=>{
    let response= await profileAPI.savePhoto(file)
    if(response.data.resultCode===0){
        dispatch(savePhotoSuccsess(response.data.data.photos))
    }


}

//end thunk
// export const UpdateNewPostTextCreator =(text)=> ({type:Updatneposttext, newText:text})
export default profileReducer;