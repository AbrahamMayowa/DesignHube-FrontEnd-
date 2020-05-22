import React from 'react'
import '../styles/work.css'
import ReactPlayer from 'react-player'

const WorksCard = ({imageFile, startingPrice})=>{
    let fileElement;
    // if file is image
    if(imageFile.image){
        fileElement = <img src={imageFile.value} className="work-image" />
    }else{
        fileElement = <ReactPlayer 
        url={imageFile.value}
        controls={true}
        width='100%'
        height='100%'/>
    }
    return(
        <div className='work-card'>
            <div className='work-image-wrapper'>
            {fileElement}
            </div>
            <div className='works-starting-price'>STARTING FROM {startingPrice}</div>
        </div>
    )
}

export default WorksCard