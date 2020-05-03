import React from 'react'
import '../styles/footer.css'

const Footer=()=>{
    return(
        <div className='footer'>
            <ul className='footer-list'>
                <li className='footer-logo'>designHube</li>
                <li className='copyright'>
                &copy; copyright 2020. All Right Reserved
                </li>
                <li className='developer'>Developed by <a href='https://twitter.com/mayowa_life'>FullStackMayor</a></li>
            </ul>
        </div>
    )
}

export default Footer