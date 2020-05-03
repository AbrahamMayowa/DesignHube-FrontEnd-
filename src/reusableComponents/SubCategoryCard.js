import React from 'react'
import {useHistory} from 'react-router-dom'
import '../styles/subCategoryCard.css'

const SubCategoryCard =({subCategory})=>{

    const history = useHistory()

       /*
    sample data categoryData
    {
        name: 'categoryname,
        categoryDescripText: 'text here'
        list: [
            {
                subImage: 'image here',
                realName: 'sub real name'
                subName: 'sub name here',
                urlParams: 'link parameter to sub category'
                subData: {
                    categoryName: 'Graphics and Design', 
                    subCategoryDescripText: 'Want to say more with less?', 
                    startingPrice: 'price here', 
                    deliveryTime: {deliveryFrom : 'from-hour, deliveryTo: 'to-hour'}, 
                    pastWorkImages: [list of images here]
                }
            }
        ]
    }

    */

    const handlePush=(url)=>{
        history.push(url)
    }


    return (
        <div className='sub-card' onClick={()=> handlePush(`/category/${subCategory.urlParams}`) }>
            <div className='sub-image'>
                <img src={subCategory.subImage} alt='sub category image' />
            </div>
            <div className='sub-name'>
                {subCategory.subName}
            </div>
        </div>
    )
}

export default SubCategoryCard