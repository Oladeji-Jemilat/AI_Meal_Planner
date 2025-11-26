import React from 'react'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import LogoutButton from './Logout'
import Profile from './Profile'
import MyDashboard from './MyDashboard'
import Logo from '../../Logo'

const Dashboard = () => {
  return (
    <div className='dashboard-con'>
          <div className='dashboard-nav'>
          <div className="dashboard-list"> <h3>My Dashboard</h3>
        <div>
            <span>User</span>
            <span>IM</span>
            </div></div></div>
      <div className='dashboard-wrapper'>
        <aside className='aside'>
        <Link to="/" className='aside-link'>Home</Link>
        <Link to="/dashboard/" className='aside-link'>Dashboard</Link>
        <Link to="/dashboard/profile" className='aside-link'>Profile</Link>
        <Link to="/updateprofile" className='aside-link'>Update Profile</Link>
        <LogoutButton/>
        </aside>

        <div style={{ width: "80%", marginLeft: "auto", padding: "3rem" }}>
<Routes>
    <Route path='/' element={<MyDashboard/>}/>
    <Route path='/profile' element={<Profile/>}/>
</Routes>
        </div>
      </div>
    
    </div>
  )
}

export default Dashboard