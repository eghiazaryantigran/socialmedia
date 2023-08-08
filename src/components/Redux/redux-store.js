import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profile_reducer from "./profile_reducer";
import dialogs_reducer from "./dialogs_reducer";
import users_reducer from "./users_reducer";
import usersReducer from "./users_reducer";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import authReducer from "./auth_reducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app_reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPages: dialogsReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form:formReducer,
    app:appReducer,

})


// google extination start

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)
));

 //end google extination
// let store = createStore(reducers,applyMiddleware(thunkMiddleware));
export default store;