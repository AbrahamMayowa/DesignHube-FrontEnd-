import React from 'react'
import '../styles/callAction.css'



const CallToAction=(props)=>{

    return (
        <div className='action-wrapper'>
            
              <ul className='action-list'>
                  <li className='action-header'>
                      Contact us for your project today
                  </li>
                  <li className='action-sub-header'>
                        We've got all your business needs covered 
                  </li>
                  <a href='/contact' className='action-button'>
                      Contact Us
                  </a>
            </ul>  
        
        </div>
    )
}

export default CallToAction