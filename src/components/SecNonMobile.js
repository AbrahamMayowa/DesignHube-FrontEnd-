import React from 'react'
import '../styles/noneMobileHeader.css'

const SecNonMobile =()=>{
    return (
        <div className='sec-header-wrapper'>
            <div className='service-header'>
                <a href='/graphics-design' className='service-row'>Graphics and Design</a>
                <a href='/video-animation'className='service-row'>Video and Animation</a>
                <a href='/music-audio' className='service-row'>Music and Audio</a>
                <a href='/programming-tech' className='service-row'>Programming and Tech</a>
                <a href='/branding-service' className='service-row'>Branding Services</a>
            </div>
        </div>
    )
}

export default SecNonMobile