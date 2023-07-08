import React, {useState} from "react";
import s from "./ProfileInfo.module.css";


const ProfileStatusWhiteHooks =(props)=>{

    const[EditMode,SetEditMode]=useState(false)
    const[status,SetStatus]=useState(props.status)


// let SteteWhiteSetStete=useState(true)
//     let EditMode=SteteWhiteSetStete[0]
//     let SetEditMode=SteteWhiteSetStete[1]

   const activateEditMode=()=>{
       SetEditMode(true)
   }

    const deactivateEditMode=()=>{
        SetEditMode(false)
         props.updateStatus(status)

    }

    const onStatusChange=(e)=>{
        SetStatus(e.currentTarget.value)


    }
    return (

            <div>
                {!EditMode &&
                    <div>
                        <span onDoubleClick={activateEditMode}>{props.status || "====" }</span>
                    </div>
                }
                {EditMode &&
                    <div>
                        <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange} value={status}/>
                    </div>
                }
            </div>
        )

}

export default ProfileStatusWhiteHooks;