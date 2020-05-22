

import React from 'react'
import SubCategory from './screens/SubCategory'
import MobileHeader from './components/MobileHeader'
import NoneMobileHeader from './components/NoneMobileHeader'
import SecNonMobile from './components/SecNonMobile'
import NavigationComponent from './components/NavigationComponent'
import './app.css'
import HomeScreen from './screens/HomeScreen'
import BrandingService from './screens/BrandingServices'
import GraphicsDesign from './screens/GraphicsDesign'
import ContactForm from './screens/ContactForm'
import MusicAudio from './screens/MusicAudio'
import ProgrammingTech from './screens/ProgrammingTech'
import VideoAnimation from './screens/VideoAnimation'
import Success from './screens/Success'
import {Provider} from 'react-redux'
import {store} from './redux/store'


import {
  
    Switch,
    Route,
  } from "react-router-dom";

import Footer from './components/Footer'


export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {width: 0, height: 0, openNavigation: false}
    }

    updateDimension=()=>{
        this.setState({
            ...this.state, 
            width: window.innerWidth,
            height: window.innerHeight})
    }

    handleNavigation =()=>{
        this.setState(prevState =>{
            return {
                ...prevState,
                openNavigation: !prevState.openNavigation
            }
        })
    }

    componentWillMount(){
        this.updateDimension()
        window.addEventListener('resize', this.updateDimension)
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.updateDimension)
    }

    render(){

        const {width, openNavigation} = this.state

        const appStyle = {
            
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
           

            
        }

        return (
            <Provider store={store} >
            <div style={appStyle}>

                <NavigationComponent handleNavigation={this.handleNavigation} navigationState={openNavigation} />
                {width >= 700 ? <NoneMobileHeader /> : <MobileHeader handleNavigation={this.handleNavigation}/>}
        

                <Switch>
                    <Route path='/' exact component={HomeScreen} />
                    <Route path='/graphics-design' component={GraphicsDesign}/>
                    
                    <Route path='/programming-tech' component={ProgrammingTech} />
                    <Route path='/branding-service' component={BrandingService} />
                    <Route path='/music-audio' component={MusicAudio} />
                    <Route path='/video-animation' component={VideoAnimation}/>
                    <Route path='/contact' component={ContactForm} />
                    <Route path='/success' component={Success} />
                    <Route path='/category/:subCategory' component={SubCategory}/>
                  

                </Switch>
                <Footer />
            </div>

            </Provider>
        )
    }
}