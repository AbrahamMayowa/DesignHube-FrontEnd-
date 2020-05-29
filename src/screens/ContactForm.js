import React, {useState, useEffect} from 'react'
import {ProcessLoader} from '../components/LoadingSpinner'
import { Formik } from 'formik';
import '../styles/contact.css'

const ContactForm =(props)=>{

    const [loading, setLoading] = useState(false)
    const [formSubmitted, setFormSubmitted] = useState({success: false, error: ''})

    useEffect(()=>{
        if(formSubmitted.success){
            props.history.push('/success')
        }
        if(formSubmitted.error){
            setLoading(false)
        }
        
    }, [formSubmitted.success, formSubmitted.error, props.history])



    const handleFormSubmission = async (clientName, specification, serviceWanted, budget, email)=>{
        setLoading(true)
        setFormSubmitted({...formSubmitted, error: ''})
        try{
        const response = await fetch('https://young-bayou-40472.herokuapp.com/api/contact', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'Post',
            body: JSON.stringify({
                clientName,
                email,
                serviceWanted,
                budget,
                specification
            })
        })
        if(!response.ok){
            throw new Error('Server error. Try again')
        }
        const resData = await response.json()
        setFormSubmitted({
            ...formSubmitted,
            error: '',
            success: true
        })
        setLoading(false)
    }catch(error){
        setFormSubmitted({
            ...formSubmitted,
            success: false,
            error: error.message
        })
    }
      
    }

    const validate = values =>{
        const errors = {}
        if(!values.email){
            errors.email = 'Email is required to contact you'
        }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
            errors.email = 'Provide a valid email account to contact you'
        }else if(!values.socialMedia){
            errors.socialMedia = 'One social media account is required to contact you'
        }else if(!values.clientName){
            errors.clientName = 'Name is required'
        }else if(!values.serviceWanted){
            errors.serviceWanted = 'Let us know about the service you need'
        }else if(!values.specification){
            errors.specification = 'Let us know your requirements'
        }else if(!values.budget){
            errors.budget = 'Let us know your budget'
        }
        return errors
    }
    return(
        <div className='contact-form'>
           
            <Formik
            initialValues={{
                clientName: '',
                email: '',
                serviceWanted: '',
                specification: '',
                budget: '',
                socialMedia: ''
            }}
            validate={validate}
            onSubmit={values => {
                handleFormSubmission(values.clientName, values.specification, values.serviceWanted, values.budget, values.email, values.socialMedia)
           
            }}
        >
            {props =>(
                <div className='form-wrapper'>
                    <div className='contact-header'>
                        <div className='font-wrapper'>
                            <i className="fas fa-id-card contact-font"></i>
                        </div>
                        <p>Contact us now for a quick response.</p>

                    </div>

                    <div className='server-error'>{formSubmitted.error ? formSubmitted.error : null}</div>

                    <form className='contact-form-control' onSubmit={props.handleSubmit}>
                        <label htmlFor='client name' />
                        <input
                            id='clientName'
                            name='clientName'
                            type='text'
                            placeholder='Client Name'
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                        />

                        <div className='form-error'>
                            {props.touched.clientName && props.errors.clientName ? (
                                <span className='error-text'>{props.errors.clientName}</span>
                            ): null}
                        </div>

                        <label htmlFor='email' />
                        <input
                            id='email'
                            name='email'
                            type='text'
                            placeholder='Email'
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                        />
                        <div className='form-error'>
                            {props.touched.email && props.errors.email ? (
                                <span className='error-text'>{props.errors.email}</span>
                            ): null}
                        </div>

                        <input
                            id='socialMedia'
                            name='socialMedia'
                            type='text'
                            placeholder='Social media handle name'
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                        />
                         <div className='form-error'>
                            {props.touched.socialMedia && props.errors.socialMedia ? (
                                <span className='error-text'>{props.errors.socialMedia}</span>
                            ): null}
                        </div>

                        <label htmlFor='service wanted' />
                        <input
                            id='serviceWanted'
                            name='serviceWanted'
                            type='text'
                            placeholder="Your prefered service"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                        />
                        <div className='form-error'>
                            {props.touched.serviceWanted && props.errors.serviceWanted ? (
                                <span className='error-text'>{props.errors.serviceWanted}</span>
                            ): null}
                        </div>

                        <label htmlFor='specification' />
                        <textarea
                            id='specification'
                            name='specification'
                            placeholder='Your requirements'
                            rows="10"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                        />
                        <div className='form-error'>
                            {props.touched.specification && props.errors.specification ? (
                                <span className='error-text'>{props.errors.specification}</span>
                            ): null}
                        </div>
                        

                        <label htmlFor='budget' />
                        <input
                            id='budget'
                            name='budget'
                            type='number'
                            placeholder="Your budget in USD"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                        />
                        <div className='form-error'>
                            {props.touched.budget && props.errors.budget ? (
                                <span className='error-text'>{props.errors.budget}</span>
                            ): null}
                        </div>
                        {loading ? (<ProcessLoader />) : <input className='form-submit' type='submit' value='Submit'/>}
                    </form>
                </div>
            )}
        </Formik>
        </div>
    )
}

export default ContactForm