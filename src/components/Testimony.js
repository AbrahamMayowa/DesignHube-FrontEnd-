import React from 'react'
import testimony1 from '../assets/mainPage/t1.jpg'
import testimony2 from '../assets/mainPage/t2.jpg'
import testimony3 from '../assets/mainPage/t3.jpg'
import TestimonyCard from './TestimonyCard'
import '../styles/testimony.css'

const Testimony=()=>{

    const testimonyStyle ={
        
    }

    const text1 = 'As a small company owner we have had bad experience with digital service providers. When we discovered designHube, we contacted them with our logo specification. They delivered on time and willing to change things up based on our preferences. In the end, we were provided with stunning design that we absolutely love. I would definitely recommend designHube to anyone looking for logos and branding'
    const text2 = 'DesignHube is my favourite service provider when it comes to logo design, animation, banner design and business card. I always love their services and won"t hesitate to rate them with 5 stars. They always provide great services at affordable price. I recommended designHube to my business partners, and their experiences are top notch with designHube.'
    const text3 = 'DesignHube created my website, business logo and my YouTube intro videos. They are trusted and efficient in providing world class services.'
    return (
        <div className='testimony-main'>
            <p className='testimony-header'>Our Customers' Experiences</p>
            <div className='testimony-list'>
                <TestimonyCard imageFile={testimony3} text={text1} name='Susan Parker'/>
                <TestimonyCard imageFile={testimony1} text={text2} name='Juliatte Colen'/>
                <TestimonyCard imageFile={testimony2} text={text3} name='YouTuber' />
            </div>
        </div>
    )
}

export default Testimony