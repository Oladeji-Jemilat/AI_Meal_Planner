import './App.css'
import PublicPages from './components/layouts/PublicPages'
import LoginForm from './components/pages/Login'
 import SignupForm from './components/pages/Signup'
 import VerifyAccount from './components/pages/VerifyUser'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/pages/dashboard/Dashboard'


import { Toaster } from 'sonner'


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
  </Routes>
  </BrowserRouter>
  

  
 </div>
  )
}

export default App


// https://www.instacart.com/company/wp-content/uploads/2021/10/meal-plan-paper-1050x525.jpg
//https://csnn.ca/wp-content/uploads/2024/02/Meal-Planning.jpg