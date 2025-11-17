import { Children } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";


export const authContext = createContext()

const AuthProvider =({children}) =>{
    const [user, setUser]=useState({})
    const [submitting, setSubmitting]= useState(false)
    const navigate = useNavigate()



const signup = async(formDetails)=>{
setSubmitting(true)
try {
    const res = await fetch (`http://localhost:3001/api/auth/signup`,{
        method:POST,
        body:JSON.stringify(formDetails),
        headers:{
            "Content-Type":"application/json"
        }
    })
    const data = await res.json()
    if(res.status === 201){
        toast.message || "signup successfully!"
        navigate("/login")
    }
} catch (error) {
    console.log(error);
    
}finally{
    setSubmitting(false)
}
}

const value ={
user,
submitting,
signup,
}

return(
    <authContext.Provider value={value}>{children}</authContext.Provider>
)

}

export default AuthProvider