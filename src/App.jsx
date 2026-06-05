import './App.css'
import PublicPages from './components/layouts/PublicPages'
import LoginForm from './components/pages/Login'
 import SignupForm from './components/pages/Signup'
 import VerifyAccount from './components/pages/VerifyUser'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/pages/dashboard/Dashboard'


import { Toaster } from 'sonner'
import UpdateProfile from './components/pages/dashboard/UpdateProfile'


function App() {
  

  return (
 <div>

  <BrowserRouter>
  <Toaster richColors position="top-right" closeButton visibleToasts={3} />
  <Routes>
    <Route path='/*' element={ <PublicPages/>}/>
    <Route path='/login' element={<LoginForm/>}/>
    <Route path='/signup' element={<SignupForm/>}/>
    <Route path='/verify/:token' element={<VerifyAccount/>}/>
    <Route path='/dashboard/*' element={<Dashboard/>}/>
    <Route path='/updateprofile' element={<UpdateProfile/>}/>

  </Routes>
  </BrowserRouter>
  
<vapi-widget assistant-id="60575e58-ac9a-476b-8813-77237b34c1ac" public-key="d326fc1b-976f-42d4-a0b6-46cd93ef97be"></vapi-widget>

<script
  src="https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js"
  async
  type="text/javascript"
></script>
  
 </div>
  )
}

export default App


// https://www.instacart.com/company/wp-content/uploads/2021/10/meal-plan-paper-1050x525.jpg
//https://csnn.ca/wp-content/uploads/2024/02/Meal-Planning.jpg