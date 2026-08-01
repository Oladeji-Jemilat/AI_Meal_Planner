import { useEffect } from 'react'
import { useState } from 'react'
import { data, Link, useParams } from 'react-router-dom'
import { toast } from 'sonner'

const Profile = () => {
  const [userInfo, setUserInfo]=useState([])
  const _id= useParams()

useEffect(()=>{
  getUserInfo()
}, [])

  //const token =JSON.parse(localStorage.getItem("Token"))
  const token=localStorage.getItem("jwt_token");
  const getUserInfo = async ()=>{
    try {
      const res= await fetch (`${import.meta.env.VITE_BASE_URL}/api/user/viewprofile/${_id}`,{
method:"GET",
headers:{
  'content-type': 'application/json',
   "authorization": `Bearer ${token}`
}
      })
      const data = await res.json()
      console.log(data);
      
      if(!data.success){
        toast.error(data.message)
      }
      else{
        setUserInfo(data.user)
        toast.success(data.message || "profile fetched successfully!")
        
      }
      
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <div>
<div className='user-details'>
    <div style={{border:"1px solid green", height:"100px", width:"100px"}}>
    <img src="" alt="User Image" />
    </div>
<div className='user-details-1'>
    <div className='user-details-2' >
    <h3>{userInfo.name}</h3>
     <span>{userInfo?.subscription?.status}</span>
   </div>
   <div>
  <hr />
  <h5>{userInfo.email}</h5>
</div>
</div>
</div>
    </div>
  )
}

export default Profile