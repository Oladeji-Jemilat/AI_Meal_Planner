import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner'

const LogoutButton =  () => {
const navigate = useNavigate()


const handleLogout = async () => {
//const token = JSON.parse(localStorage.getItem("Token"))
 const token=localStorage.getItem("jwt_token");
console.log(token);
if(!token){
  toast.error("session expired!")
  navigate("/login")
}
 try {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/auth/logout`,{
  method:"POST",
  headers:{
     "Content-Type":"application/json",
    Authorization:`Bearer ${token}`
  },
  })
  const data = await response.json()
 // console.log(data);
  if(response.status === 200){
    toast.success(data.message || "You've logged out")
   // localStorage.removeItem("Token");
   localStorage.removeItem("jwt_token")
    navigate("/login")
    return;
  } else if(response.status === 400){
    toast.error(data.message || "invalid Token")
    navigate("/login")
    return;
  }
 } catch (error) {
  console.log(error);
  
 }
  
   
  }

  return (
    <p className='logout' onClick={handleLogout}>
      Logout
    </p>
  );
};

export default LogoutButton