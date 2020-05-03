import React from 'react'
import '../styles/subcategoryBar.css'
import {useHistory} from 'react-router-dom'


const SubCategoryBar=({sideBarList})=>{
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

   const history = useHistory()


   const handlePush=(url)=>{
    history.push(url)
}

    return (
        <div className='side-list' >
            <div className='side-name'>{sideBarList.name}</div>
            <div className='subBar-list'>
                {sideBarList.list.map(item =>{
                    return (
                        <div className='bar-list' onClick={()=> handlePush(`/category/${item.urlParams}`) }>
                            {item.subName}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SubCategoryBar