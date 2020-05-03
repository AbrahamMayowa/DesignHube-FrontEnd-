import React from 'react'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import '../styles/loading.css'

export const PageLoader =()=>{
    return(
        <div className='page-loader' style={{minHeight: '70vh'}}>
            <Loader
                type="Puff"
                color="#228B22"
                height={300}
                width={100}
            
            />
        </div>
    )
}

export const ProcessLoader=()=>{
    return(
        <div className='process-loader'>
            <Loader
                type="Bars"
                color="white"
                height={40}
                width={100}
            
            />

        </div>
    )
}