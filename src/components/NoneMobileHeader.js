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


                <div className='none-mobile-header-search'>
                    
                    <form onSubmit={handleSearchSubmit} className='form-control'>
                    <span className='search-icon'>
                    <SearchIcon style={{fontSize: 15}} />
                    </span>
                    <input type='text' className='input-search' name='search' placeholder='Find services' />
                    <input type='submit' className='search-submit' value='search' onChange={(e=> setSearchInput(e.value))}/>
                    </form>   
                </div>

                <div className='service-contact'>
                    <a href='/contact' className='contact'>Contact</a>
                    <a className='all-service' href='/#service-link'>Services</a>
                </div>
            </div>
        </div>
    )
}

export default NoneMobileHeader