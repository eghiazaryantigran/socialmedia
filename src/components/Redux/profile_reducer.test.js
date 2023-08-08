import profileReducer, {addPostActionCreator, deletePost} from "./profile_reducer";

let state={
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

}



it('messege of new post shoul be correct', () => {

    // start data

    let action=addPostActionCreator("kamasutara")



    //2 action
    let newState=profileReducer(state,action)


//3 expections

    expect(newState.posts.length).toBe(4);

});


it('length pf post shuld to be incremented', () => {

    // start data

    let action=addPostActionCreator("kamasutara")




    //2 action
    let newState=profileReducer(state,action)


//3 expections

    expect(newState.posts[4].message).toBe("kamasutara");

});



it('deleting', () => {

    // start data

    let action=deletePost(1)




    //2 action
    let newState=profileReducer(state,action)


//3 expections

    expect(newState.posts.length).toBe(3);

});


it('deleting if id is not correct', () => {

    // start data

    let action=deletePost(10000)




    //2 action
    let newState=profileReducer(state,action)


//3 expections

    expect(newState.posts.length).toBe(4);

});