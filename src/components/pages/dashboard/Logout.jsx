import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner'

const LogoutButton =  () => {
const navigate = useNavigate()


const handleLogout = async () => {
const token = JSON.parse(localStorage.getItem("Token"))
console.log(token);
if(!token){
  toast.error("session expired!")
  navigate("/login")
}
 try {
  const response = await fetch("http://localhost:3001/api/auth/logout",{
  method:"POST",
  headers:{
     "Content-Type":"application/json",
    Authorization:`Bearer ${token}`
  },
  })
  const data = await response.json()
 // console.log(data);
  if(response.status === 200){
    toast.error(data.message || "You've logged out")
    localStorage.removeItem("Token");
    navigate("/login")
  } else if(response.status === 400){
    toast.error(data.message || "invalid Token")
    navigate("/login")
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