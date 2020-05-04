import React from 'react'
import success from '../mainPage/success.svg'
import '../styles/success.css'


const Success =(props)=>{
    return(
        <div className='success-wrapper'>
            <img src={success} className='success-image'/>
            <p>Your form successfully submitted! We will get back to you!</p>
        </div>
    )
}

export default Success