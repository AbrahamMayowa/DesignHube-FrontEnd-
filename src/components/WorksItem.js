import React from 'react'
import WorksCard from './WorksCard'
import '../styles/work.css'

const WorksItem =({pastWorksImages, startingPrice})=>{
    return (
        <div className='works-item'>
            {pastWorksImages.map((item, index)=> <WorksCard key={index} startingPrice={startingPrice} imageFile={item}/>)}
        </div>
    )
}

export default WorksItem