import { useState, useEffect} from "react"
import { useForm } from "react-hook-form"
import { data, Route, Routes } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"



//schema
const loginSchema = yup.object({
    email:yup.string().required("email required").email("please enter correct email"),
    password:yup.string().required("password required").min(6,"password must be at least 6 characters"),
})
//handle form
const LoginForm =()=>{
    const [submitting, setSubmitting] = useState(false)
     const [showPass, setShowPass]=useState(false)
    const navigate = useNavigate()
    const {register, handleSubmit, formState:{errors}}=useForm({
       resolver:yupResolver(loginSchema),
       defaultValues:{
        email:"",
        password:""
       }
    })

    console.log(errors)
    
    const handleShowPass=()=>{
    setShowPass((prev) => !prev)
   }
const onSubmit = async (inputs)=>{
    console.log(inputs);
    
        setSubmitting(true)
        try {
            const response = await fetch("http://localhost:3001/api/auth/login", {
                method: "POST",
                body: JSON.stringify(inputs),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json()
            
            if (response.status === 200) {
                toast.success(data.message || "You've Logged In")
                navigate(`/dashboard`)
            }
            console.log(data)
            //save token to locastorage
            localStorage.setItem("Token", JSON.stringify(data.token))
  
        } catch (error) {
            console.log(error)
        } finally {
            setSubmitting(false)
        }
    
}


    return (
<form  onSubmit={handleSubmit(onSubmit)} className="form-wrapper">
            <div className="form">
<div className="form-list">
                <h1>Welcome Back!</h1>
              <p>Enter your creadentials to access your account</p>
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
                {errors.password && <p className="error-message">{errors.password.message}</p>}
                <span style={{cursor:"pointer"}} onClick={handleShowPass}>{showPass? "Hide":"Show"} </span>
                </div>
            </div>
            <div  className="form-list">
               <button>Submit</button>
            </div>
            <div>
            <Link to="/signup" className="form-link">Don't have account? <span className="form-link-item">Sign Up</span></Link>
            </div>
           
        </div>
       
</form>

    )
}

export default LoginForm