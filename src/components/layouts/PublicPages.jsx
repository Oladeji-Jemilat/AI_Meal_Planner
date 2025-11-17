import React from 'react'
import { Route, Routes } from "react-router-dom"
import Navbar from './Navbar'
import Footer from './Footer'
import Splash from './Splash'


const PublicPages = () => {
  return (
    <div>
  <Navbar/>    
<Routes>
    <Route path='/'  element={<Splash/>}/>
</Routes>
<Footer/>
    </div>
  )
}

export default PublicPages