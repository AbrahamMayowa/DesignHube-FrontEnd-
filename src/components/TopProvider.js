import React from 'react'
import '../styles/topProvider.css'

const TopProvider =()=>{
    return(
        <div className='provider-wrapper'>
            <div className='providers'>
                <span className='provider'>
                    Facebook
                </span>
                <span className='provider'>
                    Google
                </span>
                <span className='provider'>
                    MIT
                </span>
                <span className='provider'>
                    NetFlix
                </span>
                <span className='provider'>
                    PAYPAL
                </span>

                <span className='provider'>
                    P&G
                </span>
            </div>
        </div>
    )
}

export default TopProvider
