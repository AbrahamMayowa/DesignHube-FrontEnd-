import React from 'react'
import '../styles/slideItem.css'

const SlideItem =({imageFile, serviceName})=>{
    return (
        <div className='slide-item'>
            <img src={imageFile} alt='service image'/>

            <div className='service-name-text'>
                <span className='service-name'>{serviceName}</span>
            </div>
            
        </div>
    )
}

export default SlideItem