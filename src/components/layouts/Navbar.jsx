import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'
import Login from '../pages/Login'
import Logo from '../Logo'
import { useState, useEffect } from 'react'


const Navbar = () => {
  const [auth, setAuth]=useState(false)
  
useEffect(()=>{
  const token = JSON.parse(localStorage.getItem("Token"))
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
               <Link to="/about" className='link'>Profile</Link>
            </div>
        </div>
     <div>
        {auth ? (
          <Link to="/dashboard"><span className="listItems">You're Logged In</span></Link> // ✅ show user if logged in
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