
// const Update_New_Message_Body="Update_New_Message_Body";

const Send_Message ="Send_Message";


let initialState ={
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
    // newMessageBody:"",
}
 const dialogsReducer = (state=initialState,action)=>{

     switch (action.type) {
         case Send_Message:
             let body = action.newMasageBody;
             return {
                 ...state,
                 // newMessageBody: "",
                 messages: [...state.messages, {id: 200, message: body}],

             };

         default:
             return state

     }


 }

export const SendMessageCreator =(newMasageBody)=>({type:Send_Message,newMasageBody})
// export const updateNewMesageBodyCreator =(body)=>({type:Update_New_Message_Body,body:body})

export  default dialogsReducer;