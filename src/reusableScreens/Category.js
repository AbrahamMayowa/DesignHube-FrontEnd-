import React from 'react'
import SubCategoryBar from '../reusableComponents/SubCategoryBar'
import SubCategoryItem from '../reusableComponents/SubCategoryItem'
import ClientAssurance from '../reusableComponents/ClientAssurance'
import '../styles/category.css'


const Category =({categoryData})=>{

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
        <div className='category'>
            <div className='name-descript-text'>
                <div className='name'>
                    {categoryData.name}
                </div>
                <div className='descript-text'>
                    {categoryData.categoryDescripText}
                </div>
            </div>

            <div className='sub-list'>
                <SubCategoryBar sideBarList={categoryData} />
                <SubCategoryItem subList={categoryData.list} />
                
            </div>

            <div className='client-assurance'>
            <ClientAssurance />
            </div>
        </div>
    )
}

export default Category