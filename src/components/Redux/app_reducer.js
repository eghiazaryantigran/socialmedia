import {authApi} from "../../api/api";
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./auth_reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';



let initialState = {
    initialized:false

}
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

default:
    return state
    }


}
// export const follow = (userId) => ({type: FOLLOW, userId})
export const initializedSuccess = () => ({type:INITIALIZED_SUCCESS})

//thunk
export const initializeApp = () => (dispatch)=>{
let promise=dispatch(getAuthUserData())
debugger;

Promise.all([promise]).then(()=>{
    dispatch(initializedSuccess())

})


}


// end thunk
export default appReducer;