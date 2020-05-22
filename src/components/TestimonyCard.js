import React from 'react'
import '../styles/testimony-card.css'

const TestimonyCard =({imageFile, text, name})=>{
    return (
        <div className='testimony'>
           
                <img src={imageFile} />

            <div className='testimony-text'>
                <p className='text'>{text}</p>
                <p className='name'> -- {name}</p>
            </div>

        </div>
    )
}

export default TestimonyCard