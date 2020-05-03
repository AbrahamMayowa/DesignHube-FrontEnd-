import React, {useEffect, useState} from 'react'
import WorksItem from '../components/WorksItem'
import {useSelector} from 'react-redux'
import {PageLoader, ProcessLoader} from '../components/LoadingSpinner'
import {useHistory, Link, withRouter} from 'react-router-dom'

import {
    useParams
  } from "react-router-dom";

import '../styles/subCategory.css'

const SubCategory = ()=>{


    /*
        {
            subImage: 'image here', 
            subName: 'sub name here', 
            subData: {
                categoryName: 'Graphics and Design', 
                subCategoryDescripText: 'Want to say more with less?', 
                startingPrice: 'price here', 
                deliveryTime: {from : 'from-hour, to: 'to-hour'},
                pastWorkImages: [list of images here]
            }
        }
    */
 
   const {subCategory} = useParams()
   
   const [subCategoryData, setSubCategoryData] = useState({})
   const [loading, setLoading] = useState(true)

   //find the object whose subName corresponds url parameter value 
   const subData = useSelector(state => state.subStore.subCategories)
      

//console.log(subData)
   useEffect(()=>{
       setLoading(true)
       const updatedData = subData.find(item=>{
        return item.subName === subCategory
        })
        setSubCategoryData(updatedData)
        setLoading(false)



   }, [subCategory, subData])

   const history = useHistory()

   const handlePush=(url)=>{
       history.push(url)
   }

   const itemData = subCategoryData.subData

   if(loading){
     return <PageLoader />
   }
    return (
        <div className='sub-category'>
            
            <div className='link-directory'>
                <a href='/' className='back-link'><span>HOME</span></a>
                <i className="fas fa-chevron-right directory-font"></i>
                <a href={subCategoryData.categoryUrl} className='back-link'>
                    <span >{subCategoryData.subData.categoryName.toUpperCase()}</span>
                </a>
                
                <i className="fas fa-chevron-right directory-font"></i>
            
            </div>

            <div className='sub-category-header'>
                <div className='sub-name'>{subCategoryData.realName}</div>
                <div className='sub-descript'>{itemData.subCategoryDescripText}</div>
            </div>

            <div className='price-time-billing'>
                <div className='starting-price'>
                    Starting from {itemData.startingPrice}
                </div>
                <div className='delivery-time'>
                    Delivery Time: {itemData.deliveryTime.deliveryFrom} - {itemData.deliveryTime.deliveryTo}
                </div>

                <a href='/contact' className='contact-quote'>
                    Contact Now
                </a>
            </div>
            <WorksItem pastWorksImages={itemData.pastWorksImages} startingPrice={itemData.startingPrice} />
            </div>
    )

}

export default SubCategory