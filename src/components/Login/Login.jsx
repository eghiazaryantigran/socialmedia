import React from "react";
import {Field, reduxForm} from "redux-form";
import {createFild, Input,} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../Redux/auth_reducer";
import {Navigate } from 'react-router-dom';
import s from "./../common/FormsControls/FormsControl.module.css"
let LoginForm =({handleSubmit,error,captchaUrl})=>{
    return(
            <form onSubmit={handleSubmit}>

                {/*<div>*/}
                {/*    <Field  placeholder={"Email"} component={Input} name={"email"} validate={[required,maxLengthCreator(50)]}/>*/}
                {/*</div>*/}

                {createFild("Email","email",[required,maxLengthCreator(50)], Input )}
                {createFild("Password","password",[required,maxLengthCreator(50)], Input,{type:"password"} )}
                {createFild(null,"RememberMe",[required,maxLengthCreator(50)], Input,{type:"checkbox"},"Remember me" )}

                {/*<div>*/}
                {/*    <Field  placeholder={"Password"} component={Input} name={"password"} validate={[required,maxLengthCreator(20)]}/>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <Field type="checkbox" name={"rememberME"} component={Input} validate={[required]}/>Remember me*/}

                {/*</div>*/}
                {error &&
                    <div className={s.formSummaryError} > {error}</div>

                }

                { captchaUrl && <img src={captchaUrl}/>}

                { captchaUrl && createFild("Anti Bot Symbols","captcha",[required], Input)
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
        props.login(formDara.email,formDara.password,formDara.rememberMe,formDara.captcha)

    }


    if (props.isAuth) {
        return  <Navigate to="/profile" replace={true} />
    }

    return(

        <div>
            <h1>Login</h1>
         <LoginReduxForm onSubmit={ourSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}
let mapStateToProps=(state)=>({
    captchaUrl: state.auth.captchaUrl,
    isAuth:state.auth.isAuth
})
export default connect(mapStateToProps,{login}) (Login)