
import React from 'react'
import SlideItem from './SlideItem'
import Code from '../assets/mainPage/code.jpg'
import DataEntry from '../assets/mainPage/data-entry.jpg'
import Design from '../assets/mainPage/design.jpg'
import Illustration from '../assets/mainPage/illustra.jpg'
import Seo from '../assets/mainPage/seo.jpg'
import SocialMedia from '../assets/mainPage/social-media.jpg'
import '../styles/popularServices.css'


const PopularServices=()=>{
    const popularStyle= {
        height: '500px',
        width: '100vw',
       
    }
    return(
        <div className='popular-service' style={popularStyle}>
              
                    <SlideItem imageFile={Design} serviceName='Logo Design' serviceText='Build your brand' />
                   
                    <SlideItem imageFile={SocialMedia} serviceText='Reach more customer on social media' serviceName='Social Media Manager' />
                    
                    <SlideItem imageFile={Code} serviceName='Programming' serviceText='Build your custom software' />
                   
                    <SlideItem imageFile={DataEntry} serviceText='Seemingly achieve your data goal' serviceName='Data Entry' />
                   
                    <SlideItem imageFile={Illustration} serviceName='Illustration' serviceText='Creative illustration' />
                   
                    <SlideItem imageFile={Seo} serviceText='Costless to have rank high' serviceName='SEO'/>
        </div>

    
    )
}

export default PopularServices