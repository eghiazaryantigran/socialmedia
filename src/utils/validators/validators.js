export const required=value=>{
if(value){
    return undefined
}else{
    return "Field Required"
}
}



export const maxLengthCreator=(maxLength)=>(value)=>{
    if(value && value.length>maxLength){
        return `Max Length is a ${maxLength} symbols`
    }else{
        return undefined
    }
}

// export const maxLength30=value=>{
//     if(value && value.length>30){
//         return "Max Length is a 30"
//     }else{
//         return undefined
//     }
// }