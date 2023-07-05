import profile_reducer from "./profile_reducer";
import dialogs_reducer from "./dialogs_reducer";

let store = {
    _state: {

        profilePage: {
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
            newPostText: "Es im anush hayastan",
        },
        dialogsPages: {
            messages: [
                {
                    id: 1,
                    message: "HI",
                }
                , {
                    id: 2,
                    message: "How about you",
                }, {
                    id: 3,
                    message: "Yoo bro",
                }, {
                    id: 4,
                    message: "whatsu up broo",
                }, {
                    id: 5,
                    message: "im fine",
                }
            ],
            newMessageBody:"",
            dialogs: [
                {
                    id: 1,
                    name: "VAHE",
                }
                , {
                    id: 2,
                    name: "VARAZDAT",
                }, {
                    id: 3,
                    name: "TIGRAN",
                }, {
                    id: 4,
                    name: "ARA",
                }, {
                    id: 5,
                    name: "MARIAM",
                }
            ],
        }


    },


    _callsubscriber() {
        console.log("State changed")
    },

    getState(){
        return this._state;
    },
    subscribe (observe){
        this._callsubscriber=observe;
    },


    dispatch(action){
        this._state.profilePage= profile_reducer(this._state.profilePage,action);
        this._state.dialogsPages=dialogs_reducer(this._state.dialogsPages,action);
        this._callsubscriber(this._state)
        }




}

















export default store;