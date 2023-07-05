import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../Redux/auth_reducer";
import {Navigate } from 'react-router-dom';
import s from "./../common/FormsControls/FormsControl.module.css"
let LoginForm =(props)=>{
    return(
            <form onSubmit={props.handleSubmit}>

                <div>
                    <Field  placeholder={"Email"} component={Input} name={"email"} validate={[required,maxLengthCreator(50)]}/>
                </div>
                <div>
                    <Field  placeholder={"Password"} component={Input} name={"password"} validate={[required,maxLengthCreator(20)]}/>
                </div>
                <div>
                    <Field type="checkbox" name={"rememberME"} component={Input} validate={[required]}/>Remember me

                </div>
                {props.error &&
                    <div className={s.formSummaryError} > {props.error}</div>

                }


                <div>
                    <button>Login</button>
                </div>

            </form>
    )
}

const LoginReduxForm = reduxForm({
     form: "login" //unikal anun
})(LoginForm)

let Login =(props)=>{

    const ourSubmit =(formDara)=>{
        props.login(formDara.email,formDara.password,formDara.rememberMe)

    }


    if (props.isAuth) {
        return  <Navigate to="/profile" replace={true} />
    }

    return(

        <div>
            <h1>Login</h1>
         <LoginReduxForm onSubmit={ourSubmit}/>
        </div>
    )
}
let mapStateToProps=(state)=>({
    isAuth:state.auth.isAuth
})
export default connect(mapStateToProps,{login}) (Login)