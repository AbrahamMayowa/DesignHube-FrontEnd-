import React from 'react'
import '../styles/work.css'

const WorksCard = ({imageFile, startingPrice})=>{
    return(
        <div className='work-card'>
            <div className='work-image-wrapper'>
            <img src={imageFile} className='work-image' />
            </div>
            <div className='works-starting-price'>STARTING FROM {startingPrice}</div>
        </div>
    )
}

export default WorksCard