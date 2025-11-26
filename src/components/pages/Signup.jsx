import { useState, useContext } from "react";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";


//import AuthProvider, { authContext } from "../contexts/AuthContext";




//schema
const signUpSchema = yup.object({
    name:yup.string().required("name requred"),
    email:yup.string().required("email required").email("please enter correct email"),
    password:yup.string().required("password required").min(6,"password must be at least 6 characters"),
})
const SignupForm =()=>{
    const navigate = useNavigate()
    const [submitting, setSubmitting] = useState(false)
    const [showPass, setShowPass]=useState(false)
    const {register, handleSubmit, formState:{errors}}=useForm({
       resolver:yupResolver(signUpSchema),
       defaultValues:{
        name:"",
        email:"",
        password:""
       }
    })

    console.log(errors)
    const handleShowPass=()=>{
    setShowPass((prev) => !prev)
   }


const onSubmit = async (formData)=>{
    console.log(formData);
    
setSubmitting(true)
try {
    const res = await fetch (`http://localhost:3001/api/auth/signup`,{
        method:"POST",
        body:JSON.stringify(formData),
        headers:{
            "Content-Type":"application/json"
        }
    })
    const data = await res.json()
    if(res.status === 201){
        toast.success (data.message || "Sign up successfully!")
    }
} catch (error) {
    console.log(error);
    
}finally{
    setSubmitting(false)
}
}



   return(
<form  onSubmit={handleSubmit(onSubmit)} className="form-wrapper">

            <div className="form">
                 <h1 style={{textAlign:"center"}}>Get Started Now</h1>
             <div className="form-list">
                <label htmlFor="name">Name</label>
                <input type="name" name="name" id="name" {...register("name")}/>
               {errors.name && <p className="error-message">{errors.name.message}</p>}
            </div>    
            <div className="form-list">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" {...register("email")}/>

               {errors.email && <p className="error-message">{errors.email.message}</p>}
                
            </div>

            <div className="form-list">
                <label htmlFor="password">Password</label>
                <div className="showpass">
                <input type={showPass? "text": "password"}  name="password" id="password" {...register("password")}/>
                <span style={{cursor:"pointer"}} onClick={handleShowPass}>{showPass? "Hide":"Show"} </span>
                </div>
                {errors.password && <p className="error-message">{errors.password.message}</p>}
            </div>
            <div  className="form-list">
               <button>Submit</button>
            </div>
            <div className="links-btn">
            <Link to="/login" className="form-link">Have an account? <span className="form-link-item">Sing In</span></Link> <span>|</span>
            <Link to="/" className="form-link" ><span className="form-link-item">Home</span></Link>

            </div>
        </div>
       
</form>
   )
}

export default SignupForm