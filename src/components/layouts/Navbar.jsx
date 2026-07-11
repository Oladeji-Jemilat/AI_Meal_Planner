import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'
import Login from '../pages/Login'
import Logo from '../Logo'
import { useState, useEffect } from 'react'


const Navbar = () => {
  const [auth, setAuth]=useState(false)
  
useEffect(()=>{
  const token=localStorage.getItem("jwt_token");
  //const token = JSON.parse(localStorage.getItem("Token"))
  if(token){
    setAuth(true)
  }else{
    setAuth(false)
  }
}, [])
  return (
   
     <div className='navbar'>
<Logo/>
        <div>
            <div className='listItems'>
             <Link to="/home" className='link'>Home</Link>
              <Link to="/contact" className='link'>Generate</Link>
               <Link to="/dashboard" className='link'>Dashboard</Link>
            </div>
        </div>
     <div className='listItems'>
        {auth ? (
          <Link to="/dashboard" className="link"> You're Logged In</Link> // ✅ show user if logged in
        ) : (
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
        )}
      </div>
    </div>

   
  )
}

export default Navbar