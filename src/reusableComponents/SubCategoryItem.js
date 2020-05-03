import React from 'react'
import SubCategoryCard from './SubCategoryCard'
import '../styles/subCategoryItem.css'

const SubCategoryItem=({subList})=>{
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
   
  
    return (
        <div className='category-item-list'>
            {subList.map(item => <SubCategoryCard key={item.name} subCategory={item} />)}
        </div>
    )
}

export default SubCategoryItem

