import React,{useState} from "react";
import userContext from "./userContext";

const UserState = (props)=>{

    const [userStatus,setUserStatus] = useState({
        status:false,
        userName:'',
        userId:''
    });

    const updateUser = (props)=>{
        if(userStatus.status===false){
            setUserStatus({
                status:true,
                userName:props.name,
                userId:props.id
            })
        }
        else{
            setUserStatus({
                status:false,
                userName:''
            })
        }
    }

    return(
        <userContext.Provider value={{userStatus,updateUser}}>
            {props.children}
        </userContext.Provider>
    )
}
export default UserState;
