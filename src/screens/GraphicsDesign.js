import React, {useState} from 'react'

import Category from '../reusableScreens/Category'
import {withRouter} from 'react-router-dom'

//business card here
import b1 from '../assets/files/graphics_and_design/business_card/b1.jpg'
import b2 from '../assets/files/graphics_and_design/business_card/b2.jpg'
import b3 from '../assets/files/graphics_and_design/business_card/b3.jpg'

//cantoon logo
import c1 from '../assets/files/graphics_and_design/cantoon_logo/c1.jpg'
import c2 from '../assets/files/graphics_and_design/cantoon_logo/c2.jpg'
import c3 from '../assets/files/graphics_and_design/cantoon_logo/c3.jpg'
import c4 from '../assets/files/graphics_and_design/cantoon_logo/c4.jpg'
import c5 from '../assets/files/graphics_and_design/cantoon_logo/c5.jpg'

//fliers
import f1 from '../assets/files/graphics_and_design/fliers/f1.jpg'
import f2 from '../assets/files/graphics_and_design/fliers/f2.jpg'
import f3 from '../assets/files/graphics_and_design/fliers/f3.jpg'
import f4 from '../assets/files/graphics_and_design/fliers/f4.jpg'

//illustration
import i1 from '../assets/files/graphics_and_design/illustration/i1.jpg'
import i2 from '../assets/files/graphics_and_design/illustration/i2.jpg'
import i3 from '../assets/files/graphics_and_design/illustration/i3.jpg'
import i4 from '../assets/files/graphics_and_design/illustration/i4.jpg'

//logo design
import l1 from '../assets/files/graphics_and_design/logo_design/l1.jpg'
import l2 from '../assets/files/graphics_and_design/logo_design/l2.jpg'
import l3 from '../assets/files/graphics_and_design/logo_design/l3.jpg'
import l4 from '../assets/files/graphics_and_design/logo_design/l4.jpg'




const GraphicsDesign =()=>{

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

    const graphicsDesignData = {
        name: 'Graphics Design',
        categoryDescripText: 'A single place, millions of creative works',
        list: [
            {
                subName: 'Logo Design',
                subImage: l1,
                urlParams: 'logo-design',
                subData: {
                    categoryName: 'Graphics Design',
                    subCategoryDescripText: 'Want to say more with less?',
                    startingPrice: '$5',
                    deliveryTime: {from: '24hrs', to: '94hrs'},
                    pastWorkImages: [l1, l2, l3, l4]
                }
            },

            {
                subName: 'Business Card',
                subImage: b2,
                urlParams: 'business-card',
                subData: {
                    categoryName: 'Graphics Design',
                    subCategoryDescripText: 'Get professional business card in no time',
                    startingPrice: '$5',
                    deliveryTime: {from: '24hrs', to: '94hrs'},
                    postWorkImages: [b1, b2, b3]
                   
                }
            },

            {
                subName: 'Cantoon Logo',
                subImage: c2,
                urlParams: 'cantoon-logo',
                subData:{
                    categoryName: 'Graphics Design',
                    subCategoryDescripText: 'Creative cantoon logos haven',
                    startingPrice: '$5',
                    deliveryTime: {from: '24hrs', to: '94hrs'},
                    postWorkImages: [c1, c2, c3, c4, c5]
                    
                }
            },

            {
                subName: 'Flier',
                subImage: f2,
                urlParams: 'flier',
                subData: {
                    categoryName: 'Graphics Design',
                    subCategoryDescripText: 'Improve customer base with professional flier',
                    startingPrice: '$5',
                    deliveryTime: {from: '24hrs', to: '94hrs'},
                    postWorkImages: [f1, f2, f3, f4]
                }
            },

            {
                subName: 'Illustration',
                urlParams: 'illustration',
                subImage: i2,
                subData: {
                    categoryName: 'Graphics Design',
                    subCategoryDescripText: 'Creative design that you need and want',
                    startingPrice: '$5',
                    deliveryTime: {from: '24hrs', to: '94hrs'},
                    postWorkImages: [i1, i2, i3, i4]

                }
            }
        ]
    }

    const [graphics, setGraphics] = useState(graphicsDesignData)
    return(
        <div>
            <Category categoryData={graphics}/>
        </div>
    )
}

export default withRouter(GraphicsDesign)