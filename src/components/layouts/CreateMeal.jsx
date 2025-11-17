import { useState, useContext } from "react";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";


//import AuthProvider, { authContext } from "../contexts/AuthContext";




//schema
const signUpSchema = yup.object({
    weight:yup.string().required("weight required"),
    age:yup.string().required("age must be a number"),
    goal:yup.string().required("goal must be weigt_gain/weight_loss"),

})
const CreateMealForm =()=>{
    const navigate = useNavigate()
    const [submitting, setSubmitting] = useState(false)
    const [showPass, setShowPass]=useState(false)
    const {register, handleSubmit, formState:{errors}}=useForm({
       resolver:yupResolver(signUpSchema),
       defaultValues:{
        weight:"",
        age:"",
        goal:""

       }
    })

 


const onSubmit = async (formData)=>{
    console.log(formData);
    
setSubmitting(true)
try {
    const res = await fetch (`http://localhost:3001/api/auth/create`,{
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
                 <h1 style={{textAlign:"center"}}>Generate Meal With AI</h1>
             <div className="form-list">
                <label htmlFor="name">Goal</label>
                <input type="name" name="goal" id="goal" {...register("goal")}/>
               {errors.goal && <p className="error-message">{errors.goal.message}</p>}
            </div>    
            <div className="form-list">
                <label htmlFor="age">Age</label>
                <input type="age" name="age" id="age" {...register("age")}/>

               {errors.age && <p className="error-message">{errors.age.message}</p>}
                
            </div>

            <div className="form-list">
                <label htmlFor="weight">weight</label>
                <input type="text"  name="weight" id="weight" {...register("weight")}/>
        
                {errors.weight && <p className="error-message">{errors.weight.message}</p>}
            </div>
            <div  className="form-list">
               <button>Create</button>
            </div>
            <div>
            <Link to="/" className="form-link">Home</Link>
            </div>
        </div>
       
</form>
   )
}

export default CreateMealForm