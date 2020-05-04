import React, {useState}from 'react'
import '../styles/advert.css'
//import product from '../assets/mainPage/product.svg'

import product from '../assets/mainPage/product.svg'
import SearchIcon from '@material-ui/icons/Search'

const PageAdvert =({handleSearchSubmit})=>{
    const [searchInput, setSearchInput] = useState('')
    return (
        <div className='advert'>
            <div className='text-search'>
                <div className='advert-text'>
                    Find The Perfect Digital
                    Services For Your Business
                </div>
                    <div className='advert-search'>
                        
                        <form onSubmit={handleSearchSubmit} className='advert-form-control'>
                        <span className='search-icon-size'>
                        <SearchIcon style={{fontSize: 20}} />
                        </span>
                        <input type='text' name='search' className='advert-input' placeholder='Find services' />
                        <input type='submit' className='advert-submit' value='search' onChange={(e=> setSearchInput(e.value))}/>
                        </form>  
                    </div>
            </div>
            <div className='advert-svg'>
                <img src={product} alt='business-illustration' style={{width: '90%', height: '80%' }} />
            </div>
        </div>
    )
}

export default PageAdvert