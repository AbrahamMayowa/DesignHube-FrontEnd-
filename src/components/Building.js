import React from 'react'
import building from '../assets/mainPage/building.svg'
//import b from '../../public/assets/mainPage/building.svg'
import '../styles/building.css'


const Building=()=>{
    return(
        <div className='building'>
            <div className='image-wrapper'>
                <img src={building} alt='Building web app' />
            </div>

            <p>We are currently building this page. Check later for update.</p>
        </div>
    )
}

export default Building