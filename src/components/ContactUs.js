import React from 'react'

import response from '../assets/mainPage/response.svg'
import submit from '../assets/mainPage/submit.svg'
import '../styles/contactus.css'
import CallToAction from '../components/CallToAction'

const ContactUs =()=>{
    return (
        <div className='contact-us-wrapper'>
            <div className='header'>
                <p className='header-main'>How to contact us</p>
                <p className='header-sub'>There are different ways to make inquiry. Send us messages and get response in no time</p>
            </div>

            <div className='image-text'>
                <div className='item one'>
                    <img src={submit} />
                    <div className='text-wrapper'>
                    <span className="far fa-address-book font"></span>
                    <span className='sub-text-header'>
                        Send message
                    </span>
                    </div>
                    <p className='sub-text-main'>
                        Send us message through our contact form or through our various trusted social media accounts.
                    </p>
                </div>

                <div className='item two'>
                    <img src={response} />
                    <div className='text-wrapper'>
                    <span className="far fa-envelope font"></span>
                    <span className='sub-text-header'>
                        Receive message
                    </span>
                    </div>
                    <p className='sub-text-main'>
                    Contact us through different methods, we are one second away from responding!
                    </p>
                </div>
            </div>
            <a href='/contact' className='contact-button'>
                Contact Now
            </a>

        </div>
    )
}

export default ContactUs