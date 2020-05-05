import React from 'react'

import PageAdvert from '../components/PageAdvert'

import TopProvider from '../components/TopProvider'
import PopularServices from '../components/PopularServices'
import SlideItem from '../components/SlideItem'
import Code from '../assets/mainPage/code.jpg'
import DataEntry from '../assets/mainPage/data-entry.jpg'
import Design from '../assets/mainPage/design.jpg'
import Illustration from '../assets/mainPage/illustra.jpg'
import Seo from '../assets/mainPage/seo.jpg'
import SocialMedia from '../assets/mainPage/social-media.jpg'
import GetWorkDone from '../components/GetWorkDone'
import Services from '../components/Services'
import CallToAction from '../components/CallToAction'
import {Link} from 'react-router-dom'


import '../styles/homeScreen.css'
export default class HomeScreen extends React.Component{

    services = {serviceData: [
        {serviceImage: Code, serviceName: 'Programming', index: 0},
        {serviceImage: SocialMedia, serviceName: 'Social Media Manager', index: 1},
       
        {serviceImage: DataEntry, serviceName: 'Data Entry', index: 2},
        {serviceImage: Design, serviceName: 'Logo Design', index: 3},
        {serviceImage: Seo, serviceName: 'Search Engine Optimization', index: 4},
        {serviceImage: Illustration, serviceName: 'Illustration', index: 5}
    ]}

    constructor(props){
        super(props)
        this.state = {services: this.services.serviceData, service: this.services.serviceData[3]}
    }

    prevServices = ()=>{
        const newIndex = this.state.service.index-1
        this.setState({...this.state, service: this.services.serviceData[newIndex]})
    }

    nextServices =()=>{
        const newIndex = this.state.service.index+1
        this.setState({...this.state, service: this.services.serviceData[newIndex]})
    }

 


    render(){

        const homeStyle = {
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }


       const {services, service} = this.state
     
        return (
            <div className='home-wrapper' style={homeStyle}>
                <PageAdvert />
                <TopProvider />
                <div className='popular-header' >
                <p>
                Professional Services</p>
                </div>
                <div className='slide-component' style={{width: '100vw'}}>
                
             
                    {service.index >= 0.5 ? (<div className='slide-icon-left' onClick={this.prevServices}>
                        <i className="fas fa-arrow-left icon-size"></i></div>) : null}
                  

                    <div className='slide-top-wrapper'>
                    
                        <div className='slide-wrapper'>
                            <div className='slide-wrapper-list' style={{transform: `translateX(-${service.index*(100/services.length)}%)`}}>
                                {services.map(item => <SlideItem imageFile={item.serviceImage} serviceName={item.serviceName} />)}
                            </div>
                        </div>
                    </div>
                    {service.index !== this.services.serviceData.length-1 ? (<div className='slide-icon-right' onClick={this.nextServices}><i className="fas fa-arrow-right icon-size"></i>
                    </div>) : null}
                
                    </div>
                <GetWorkDone />
                <Services />
                <CallToAction handlePush={this.handlePush} />

            </div>
        )
    }
}