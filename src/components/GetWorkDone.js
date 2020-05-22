import React from 'react'

import '../styles/getWorkDone.css'
const GetWorkDone =()=>{
    return(
        <div className='work-done'>

     
            
                <p className='header-text'>Get your work done faster with us</p>
           

          
                <div className='work-list'>

                    <div className='item-wrapper'>
                    
                        <p className='sub-header'>Money back guaranteed</p>
                    <p className='item-text'>
                   
                        We always provide high quality services to our customers. In case of dissatisfaction, your payment is safe and will be refunded according to your wish.
                    </p>

                    </div>


                    <div className='item-wrapper'>
                    
                    <p className='sub-header'>Quality service at affordable price</p>
                        <p className='item-text'>
                        It our mission to provide quality service at unimaginable price. We adopt efficient process that reduce our expenses.
                        </p>

                    </div>



                    <div className='item-wrapper'>
                    
                    <p className='sub-header'>We provide 24/7 service for our customer</p>
                        <p className='item-text'>
                        We are one second away from responding to your enquiry. Contact us today.
                        </p>

                    </div>

                </div>
            </div>
      
    )
}

export default GetWorkDone