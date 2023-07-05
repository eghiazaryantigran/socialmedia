import React from "react";
import s from "./FormsControl.module.css"

 let FormControl=({input,meta,child,...props})=>{
    // debugger
   const HesError=meta.error && meta.touched;
        return(
        <div className={s.formCantrol+" "+ (HesError ? s.error:"")}>
            <div>
            {props.children}
            </div>
            {HesError ? <span>{meta.error}</span> : ""}

        </div>
        )
}



 //export let Textarea=({input,meta,...props})=>{
//     debugger
//    const HesError=meta.error && meta.touched;
//         return(
//         <div className={s.formCantrol+" "+ (HesError ? s.error:"")}>
//                  <textarea  {...input} {...props} />  {/*    dashtna */}
//
//
//             <div>
//                 {HesError ? <span>{meta.error}</span> : ""}
//
//
//         </div>
//         </div>
//     )
// }
//
//
// export let Input=({input,meta,...props})=>{
//     debugger
//    const HesError=meta.error && meta.touched;
//         return(
//         <div className={s.formCantrol+" "+ (HesError ? s.error:"")}>
//                  <input  {...input} {...props} />  {/*    dashtna */}
//
//
//             <div>
//                 {HesError ? <span>{meta.error}</span> : ""}
//
//
//         </div>
//         </div>
//     )
// }
//

export let Textarea=(props)=>{
    const{input,meta,child,...restProps}=props;
    return <FormControl {...props}><textarea  {...input} {...restProps} /> </FormControl>
}


export let Input=(props)=>{
    // debugger
    const{input,meta,child,...restProps}=props;
    return <FormControl {...props}><input  {...input} {...restProps} /> </FormControl>
}