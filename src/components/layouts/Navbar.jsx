import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'
import Login from '../pages/Login'
import Logo from '../Logo'


const Navbar = () => {
  return (
   
     <div className='navbar'>
<Logo/>
        <div>
            <div className='listItems'>
             <Link to="/home" className='link'>Home</Link>
              <Link to="/contact" className='link'>Contact</Link>
               <Link to="/about" className='link'>About Us</Link>
            </div>
        </div>
        <div>
   <div>
    <Link to="/login"><button  className='btn' >Login</button></Link>
        {/* <button  className='btn' >Login</button> */}
    </div>
        </div>
    </div>

   
  )
}

export default Navbar