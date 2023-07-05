import React from "react";
import p from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field,reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";



const MyPosts = (props) => {

    let postsElements =props.posts.map(p=>{
        return(
            <Post message={p.message} key={p.id} likeCounts={p.likeCounts}/>
        )
    })
let newPostElement =React.createRef()

    const onAddPost=(values)=>{
        props.addPost(values.newPostText);
        console.log(values.newPostText)

    }


//     let onPostChange =()=>{
//         let text=newPostElement.current.value;
// props.updateNewPostText(text)
//
//     }

    return (

        <div className={p.content}>
            <div className={p.postsBlog}>
                <h3>My Post</h3>

                <AddPostFormRedux onSubmit={onAddPost} />
                <div className={p.posts}>
                    {/*new post*/}
                </div>

                <div className="posts">

                    {postsElements}

                </div>
            </div>
        </div>

    )
}


let AddNewPostForm=(props)=>{
    return(
    <form onSubmit={props.handleSubmit}>

        <div>
            <Field  component={Textarea} name={"newPostText"} validate={[required,maxLengthCreator(10)]} placeholder={"Post message"}></Field>
        </div>
        <div>
            <button >Add post</button>
        </div>
    </form>
    )
}


const AddPostFormRedux=reduxForm({
    form:"ProfileAddNewPostform"
})(AddNewPostForm)



export default MyPosts;