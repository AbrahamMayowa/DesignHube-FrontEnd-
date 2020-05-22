import React from 'react'
import '../styles/services.css'


const Services =()=>{
    return (
        <div className='service' id='service-link'>
            <div className='service-header'>Explore our Services</div>

            <div className='service-item-wrapper '>
                <a href='/graphics-design' className='service-item item-one'>
                    <i className="fas fa-paint-brush icon-font"></i>
                    <div className='font-underline'></div>
                    <div className='service-text'>Graphics Design</div>
                </a>


                <a  href='/video-animation' className='service-item item-two'>
                    <i className="fas fa-video icon-font"></i>
                    <div className='font-underline'></div>
                    <div className='service-text'>Video and Animation</div>
                </a>


                <a  href='/music-audio' className='service-item item-three'>
                    <i className="fas fa-music icon-font"></i>
                    <div className='font-underline'></div>
                    <div className='service-text'>Music and Audio</div>
                </a>


                <a href='/programming-tech' className='service-item item-four'>
                    <i className="fas fa-laptop-code icon-font"></i>
                    <div className='font-underline'></div>
                    <div className='service-text'>Programming and Tech</div>
                </a>


                <a href='/branding-service' className='service-item item-five'>
                    <i className="far fa-lightbulb icon-font"></i>
                    <div className='font-underline'></div>
                    <div className='service-text'>Branding Services</div>
                </a>
            </div>
        </div>
    )
}

export default Services