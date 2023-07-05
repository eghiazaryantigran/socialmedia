import axios from "axios";


let instance =axios.create({
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    withCredentials:true,
    headers:{
        "API-KEY":"1daad24f-56d4-45a3-bfae-de4def25d916"
    }
})



export const userAPI={
     getUsers(currentPage,pageSize){
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response =>response.data)
    },
    getUnFollow(id){
     return instance.delete(`/follow/${id}`).then(response=>response.data)
},
    getFollow(id){
        return instance.post(`/follow/${id}`).then(response=>response.data)

    },
getProfile(id){
         console.warn("Obsolute method. Please profileAPI object")
         return profileAPI.getProfile(id)
},




    getHeader(){
         return instance.get(`/me/`)
    }
}

export const profileAPI= {

    getProfile(id) {
        return instance.get(`/profile/${id}`)
    },
    getStatus(id){
        return instance.get(`profile/status/${id}`)
    },
    updateStatus(status){
        return instance.put(`profile/status/`,{status:status})
    }

}



export const authApi={
    me(){
        return instance.get(`auth/me`)
    },
    login(email,password,rememberMe=false){
        return instance.post(`auth/login`,{email,password,rememberMe})
    },

    logout(){
        return instance.delete(`auth/login`);
    }
}

// export const getUsers =(currentPage,pageSize)=>{
//     return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
//         .then(response =>response.data)
// }



// export const getUnFollow=(id)=>{
//      return instance.delete(`/follow/${id}`).then(response=>response.data)
//
// }

// export const getFollow=(id)=>{
//     return instance.post(`/follow/${id}`).then(response=>response.data)
//
// }