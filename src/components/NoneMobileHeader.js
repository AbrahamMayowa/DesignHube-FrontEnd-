import React, {useState} from 'react'
import SearchIcon from '@material-ui/icons/Search'
import '../styles/noneMobileHeader.css'


const NoneMobileHeader = ()=>{

    const [searchInput, setSearchInput] = useState('')

    const handleSearchSubmit=()=>{
        console.log('submit')
    }

    
    return (
        <div className='none-mobile-wrapper'>
            <div className='none-mobile-header'>
                <a href='/' className='none-mobile-logo'>
                
                    designHube
                
                </a>
                
                <div className='service-contact'>
                    <a href='/contact' className='service-list'>Contact</a>
                    <a href='/graphics-design' className='service-list'>Graphics and Design</a>
                <a href='/video-animation' className='service-list'>Video and Animation</a>
                <a href='/music-audio' className='service-list'>Music and Audio</a>
                <a href='/programming-tech' className='service-list'>Programming and Tech</a>
                <a href='/branding-service' className='service-list'>Branding Services</a>
                </div>
            </div>
        </div>
    )
}

export default NoneMobileHeader