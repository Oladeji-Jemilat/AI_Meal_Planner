import React from 'react'
import Logo from '../Logo'

const Footer = () => {
  return (
    <div className='footer'>
        
    <div className='footer-1'>
          <div className='footer-1-1'>
          <Logo/>
   <div className='footer-2'>
     <p>Accepted Payment</p>
   <div className='image-footer'>
     <div className='footer-img'>
       <img src="https://1000logos.net/wp-content/uploads/2017/06/VISA-Logo-2006.png" alt="" />
    </div>  
    <div className='footer-img'>
        <img src="https://raylexflow.xyz/wp-content/uploads/2025/09/verve-card.png" alt="" />
    </div>
    
      <div className='footer-img'>
     <img src="https://icon2.cleanpng.com/20180803/wzw/3ccc958d9d6db983fe47ac52d7a9a57a.webp" alt="" />
      </div>
        </div>
   </div>
    </div>
    
               
                 <div className='footer-3'><a href="#">Contact</a>
               <div className='footer-icons'>
                 <span><i class="fa-brands fa-facebook-f"></i></span>
                <span><i class="fa-brands fa-twitter"></i></span>
                <span><i class="fa-brands fa-linkedin-in"></i></span>
               </div>
                </div>
            
                <div className='footer-3'><a href="">Support</a>
                <div className='footer-li'>
                <span>FAQ</span>
                <span>Help</span>
                </div>
                </div>
                <div className='footer-3'><a href="">Location</a>
                <div className='footer-li'>
                     <span>25°11'46.7"N 55°16'35.6"E (Ibadan Oyo, Nigeria)</span>
                </div>
               </div>
              
                
        
      </div>
            <div className='line'>
         <hr />
        <span>@Powered by FitEase</span>
       </div>
    </div>
  )
}

export default Footer