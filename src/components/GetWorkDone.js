import React from 'react'
import WorkingTeam from '../mainPage/working-team.jpg'
import '../styles/getWorkDone.css'
const GetWorkDone =()=>{
    return(
        <div className='work-done'>
            <div className='header-text'>
                <p>Get your work done faster with us</p>
            </div>

            <div className='list-image'>
                <div className='work-list'>

                    <div className='item-wrapper'>
                    <div className='work-item'>
                    <span className='icon-container'>
                        <span class="fas fa-check mark-icon"></span>
                        </span>
                        <span className='sub-header'>Money back guaranteed</span>
                        
                    </div>
                    <div className='item-text'>
                    <p>
                        We always provide high quality services to our customers. In case of dissatisfaction, your payment is safe and will be refunded according to your wish.
                        </p>
                    </div>

                    </div>
                    <div className='item-wrapper'>
                        <div className='work-item'>
                            <span className='icon-container'>
                                <span class="fas fa-check mark-icon"></span>
                            </span>
                            <span className='sub-header'>Provide quality service at affordable price</span>
                        </div>
                        <div className='item-text'>
                        <p>It our mission to provide quality service at unimaginable price. We adopt efficient process that reduce our expenses.</p>
                        </div>
                    </div>


                    <div className='item-wrapper'>
                        <div className='work-item'>
                            <span className='icon-container'>
                            <span className="fas fa-check mark-icon"></span>
                            </span>
                            <span className='sub-header'>We provide 24/7 service for our customer</span>
                            
                        </div>
                        <div className='item-text'>
                        <p>We are one second away from responding to your enquiry. Contact us today.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='work-done-image'>
                    <img src={WorkingTeam} alt='working together' />
                </div>
            </div>
        </div>
    )
}

export default GetWorkDone