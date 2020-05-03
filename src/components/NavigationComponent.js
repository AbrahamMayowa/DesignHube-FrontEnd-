import React from 'react'
import '../styles/navigation.css'


const NavigationDrawer = ({handleNavigation, navigationState})=>{


    return (    
                
                     <div className={'drawer ' + (navigationState ? 'open' : '')}>
                    <div className='nav-content'>
                        <i className="far fa-window-close drawer-close" onClick={handleNavigation}></i>
                        
                        <a href='/' className='drawer-item' onClick={handleNavigation}>
                            <i className="fas fa-house-user"></i>
                            <span className='nav-name'>Home</span>
                        </a>

                        <a href='/#service-link' className='drawer-item' onClick={handleNavigation}>
                            
                            <i className="fas fa-briefcase"></i>
                            <span className='nav-name'>Services</span>
                            
                        </a>

                        <a href='/contact' className='drawer-item' onClick={handleNavigation}>
                            <i className="far fa-address-book"></i>
                            <span className='nav-name'>Contact</span>
                        </a>
                    </div>
                    </div>
             

    )
}

export default NavigationDrawer