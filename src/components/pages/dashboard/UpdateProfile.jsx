
import { useState, useContext } from "react";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";


//import AuthProvider, { authContext } from "../contexts/AuthContext";




//schema
const updateProfileSchema = yup.object({
        age:yup.string().required("age is required"),
        weight:yup.string().required("weight is required"),
        height:yup.string().required("height is required"),
        gender:yup.string().oneOf(["male", "female"], "gender must be either 'male' or 'female'").required("Gender is required"),
        dietPreference:yup.string().required("diet Preference is required"),
        goal:yup.string().required("goal is required"),
        timePerDay:yup.string().required("time is required")
})
const UpdateProfile =()=>{
    const navigate = useNavigate()
    const [submitting, setSubmitting] = useState(false)
    // const [showPass, setShowPass]=useState(false)
    const {register, handleSubmit, formState:{errors}}=useForm({
       resolver:yupResolver(updateProfileSchema),
       defaultValues:{
        age:"",
        weight:"",
        height:"",
        gender:"",
        timePerDay:"",
        goal:"",
        dietPreference:""
       }
    })

    console.log(errors)
//     const handleShowPass=()=>{
//     setShowPass((prev) => !prev)
//    }

const token = localStorage.getItem("Token")
const onSubmit = async (formData)=>{
    console.log(formData);
    
setSubmitting(true)
try {
    const res = await fetch (`http://localhost:3001/api/user/updateuser`,{
        method:"PUT",
        body:JSON.stringify(formData),
        headers:{
            "Content-Type":"application/json",
          "Authorization":`Bearer ${token}`
        }
    })
    const data = await res.json()
    if(res.status === 200){
        toast.success (data.message || "Profile Updated successfully!")
    }else{
        toast.error(data.message || "unable to update profile")
        
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
                 <h1 style={{textAlign:"center"}}>Update Your Profile</h1>
             <div className="form-list">
                <label htmlFor="gender">Gender</label>
                <input type="text" name="gender" id="gender" {...register("gender")}/>
               {errors.gender && <p className="error-message">{errors.gender.message}</p>}
            </div>        
             <div className="form-list">
                <label htmlFor="age">Age</label>
                <input type="number" name="age" id="age" {...register("age")}/>
               {errors.age && <p className="error-message">{errors.age.message}</p>}
            </div>    
            <div className="form-list">
                <label htmlFor="weight">Weight</label>
                <input type="number" name="weight" id="weight" {...register("weight")}/>

               {errors.weight && <p className="error-message">{errors.weight.message}</p>}
                
            </div>

            <div className="form-list">
                <label htmlFor="height">Height(CM)</label>
                <input type="number" name="height" id="height" {...register("height")}/>
                {errors.height && <p className="error-message">{errors.height.message}</p>}
            </div>
            <div className="form-list">
                <label htmlFor="goal">Your Goal</label>
                <select name="goal" id="goal" {...register("goal")}>
                    <option value="">Select your goal </option>
                    <option value="lose Weight">Lose Weight</option>
                    <option value="gain Weight">Gain Weight</option>
                    <option value="maintain weight">Maintain Weight</option>
                </select>
                {errors.goal && <p className="error-message">{errors.goal.message}</p>}
            </div>
            <div className="form-list">
                <label htmlFor="">Your Diet Preference</label>
                <select name="dietPreference" id="dietPreference" {...register("dietPreference")}>
                <option value="">Select diet preference</option>
                  <option value="none">None</option>
                  <option value="balanced">Balanced</option>
                  <option value="high_protein">High_Protein</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="vegan">Vegan</option>
                  <option value="gluten_free">Gluten_Free</option>
                </select>
                {errors.dietPreference && <p className="error-message">{errors.dietPreference.message}</p>}
            </div>
            <div className="form-list">
                <label htmlFor="timePerDay">Time Per Day(MINUTES)</label>
                <input type="text" name="timePerDay" id="timePerDay" {...register ("timePerDay")}/>
               {errors.timePerDay && <p className="error-message">{errors.timePerDay.message}</p>}
            </div>    
            <div  className="form-list">
               <button disabled={submitting}>{submitting? "Updating.." : "Submit"}</button>
            </div>
            <div>
            <Link to="/Dashboard"> <span className="form-link-item">Back</span></Link>
            </div>
        </div>
       
</form>

   )
}

export default UpdateProfile