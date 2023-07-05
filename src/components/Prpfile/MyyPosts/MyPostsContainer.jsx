import React from "react";
import {addPostActionCreator, UpdateNewPostTextCreator} from "../../Redux/profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



let mapStateToProps=(state)=>{
    return {
        posts: state.profilePage.posts,
        newPostText:state.profilePage.newPostText,
    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
    addPost:(newPostText)=>{dispatch(addPostActionCreator(newPostText))},
        // updateNewPostText:(text)=>{
        //     let action = UpdateNewPostTextCreator(text)
        //     dispatch(action);
        // }
    }

}

const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;