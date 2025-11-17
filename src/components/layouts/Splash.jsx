import React from 'react'
import Button from '../Button'
import { Link } from 'react-router-dom'

const Splash = () => {

  return (
       <div className='splash'>
        <div className='left-splash'>
            <div className='splash-text'>
            <h1><span className='smart'>Smarter Meals</span> <span className='strong'>Stronger You</span></h1>
            <p>Let AI design the perfect meal and workout plan for your body, your goals, and your schedule — all in seconds.</p>
            </div>
         <Link to="/login"><button className='get-btn'>Get Started Free</button></Link>
        </div>
        <div className='splash-img'>
            <img src=" https://www.instacart.com/company/wp-content/uploads/2021/10/meal-plan-paper-1050x525.jpg" alt="Meal Planner" />
        </div>
        <hr />

    </div>
  )
}

export default Splash