import React from "react";
import s from "./FormsControl.module.css"
import {Field} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

 let FormControl=({input,meta:{error,touched},children})=>{
    // debugger
   const hasError=error && touched;
        return(
        <div className={s.formCantrol+" "+ (hasError ? s.error:"")}>
            <div>
            {children}
            </div>
            {hasError ? <span>{error}</span> : ""}

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

export const createFild=(placeholder,name,validate,component,type,about="")=>(

<div>
    <Field
        placeholder={placeholder}
        component={component}
        name={name}
        validate={validate}
        {...type}
    />{about}
</div>
     )


export const getErrorsFromMessages = (messages) => {
    let errors = Object.keys(messages).reduce((acc, key) => {
        let errorMessage = messages[key].split("->");
        errorMessage = errorMessage[1]
            .slice(0, errorMessage[1].length - 1)
            .toLowerCase();
        return { ...acc, [errorMessage]: messages[key] };
    }, {});

    return errors;
};