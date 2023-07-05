import {authApi} from "../../api/api";
import {stopSubmit} from "redux-form";

const SETUSERDATA = "SETUSERDATA";



let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth :false,

}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETUSERDATA:
            return {
                ...state,

                ...action.payload,
                // isAuth :true,
            }


    }

    return state
}
// export const follow = (userId) => ({type: FOLLOW, userId})
export const setAuthUserData = (userId,email,login,isAuth) => ({type: SETUSERDATA, payload:{userId,email,login,isAuth}})

//thunk
export const getAuthUserData = () => (dispatch)=>{

    return authApi.me()
        .then(response => {
            if (response.data.resultCode ===0){
                let {id,email,login} = response.data.data;
               dispatch(setAuthUserData(id,email,login,true));
            }
        })
return "totot"
}


export const login = (email,password,rememberMe) => (dispatch)=>{

    authApi.login(email,password,rememberMe)
        .then(response => {
            if (response.data.resultCode ===0){
               dispatch(getAuthUserData())
            }else{
                let message=response.data.messages.length > 0 ? response.data.messages[0] : "Some Error"
                 dispatch( stopSubmit("login",{_error:message}));
            }
        })

}


export const logout = () => (dispatch)=>{


    authApi.logout()
        .then(response => {
            if (response.data.resultCode ===0){
                dispatch(setAuthUserData(null,null,null,false));
            }

        })

}
// end thunk
export default authReducer;