import React from 'react'
import '../styles/mobileHeader.css'



const MobileHeader = ({handleNavigation})=>{
    return (
        <div className='mobile-header'>
  
          <i onClick={handleNavigation} class="fas fa-bars menu-icon"></i>
         
          <div className='logo'>designHube</div>

        </div>
    )
}

export default MobileHeader

