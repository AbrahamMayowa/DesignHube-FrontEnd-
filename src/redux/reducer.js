
//business card here
import b1 from '../files/graphics_and_design/business_card/b1.jpg'
import b2 from '../files/graphics_and_design/business_card/b2.jpg'
import b3 from '../files/graphics_and_design/business_card/b3.jpg'

//cantoon logo
import c1 from '../files/graphics_and_design/cantoon_logo/c1.jpg'
import c2 from '../files/graphics_and_design/cantoon_logo/c2.jpg'
import c3 from '../files/graphics_and_design/cantoon_logo/c3.jpg'
import c4 from '../files/graphics_and_design/cantoon_logo/c4.jpg'
import c5 from '../files/graphics_and_design/cantoon_logo/c5.jpg'

//fliers
import f1 from '../files/graphics_and_design/fliers/f1.jpg'
import f2 from '../files/graphics_and_design/fliers/f2.jpg'
import f3 from '../files/graphics_and_design/fliers/f3.jpg'
import f4 from '../files/graphics_and_design/fliers/f4.jpg'

//illustration
import i1 from '../files/graphics_and_design/illustration/i1.jpg'
import i2 from '../files/graphics_and_design/illustration/i2.jpg'
import i3 from '../files/graphics_and_design/illustration/i3.jpg'
import i4 from '../files/graphics_and_design/illustration/i4.jpg'

//logo design
import l1 from '../files/graphics_and_design/logo_design/l1.jpg'
import l2 from '../files/graphics_and_design/logo_design/l2.jpg'
import l3 from '../files/graphics_and_design/logo_design/l3.jpg'
import l4 from '../files/graphics_and_design/logo_design/l4.jpg'


const initialState = {
  subCategories: [
    
        {
            subName: 'logo-design',
            realName: 'Logo Design',
            categoryUrl: '/graphics-design',
            subImage: l1,
            subData: {
                categoryName: 'Graphics Design',
                subCategoryDescripText: 'Want to say more with less?',
                startingPrice: '$5',
                deliveryTime: {deliveryFrom: '24hrs', deliveryTo: '94hrs'},
                pastWorksImages: [l1, l2, l3, l4]
            }
        },

        {
            subName: 'business-card',
            realName: 'Business Card',
            categoryUrl: '/graphics-design',
            subImage: b2,
            subData: {
                categoryName: 'Graphics Design',
                subCategoryDescripText: 'Get professional business card in no time',
                startingPrice: '$5',
                deliveryTime: {deliveryFrom: '24hrs', deliveryTo: '94hrs'},
                pastWorksImages: [b1, b2, b3]
               
            }
        },

        {
            subName: 'cantoon-logo',
            realName: 'Cantoon Logo',
            categoryUrl: '/graphics-design',
            subImage: c2,
            subData:{
                categoryName: 'Graphics Design',
                subCategoryDescripText: 'Creative cantoon logos haven',
                startingPrice: '$5',
                deliveryTime: {deliveryFrom: '24hrs', deliveryTo: '94hrs'},
                pastWorksImages: [c1, c2, c3, c4, c5]
                
            }
        },

        {
            subName: 'flier',
            realName: 'Flier',
            categoryUrl: '/graphics-design',
            subImage: f2,
            subData: {
                categoryName: 'Graphics Design',
                subCategoryDescripText: 'Improve customer base with professional flier',
                startingPrice: '$5',
                deliveryTime: {deliveryFrom: '24hrs', deliveryTo: '94hrs'},
                pastWorksImages: [f1, f2, f3, f4]
            }
        },

        {
            subName: 'illustration',
            realName: 'Illustration',
            categoryUrl: '/graphics-design',
            subImage: i2,
            subData: {
                categoryName: 'Graphics Design',
                subCategoryDescripText: 'Creative design that you need and want',
                startingPrice: '$5',
                deliveryTime: {deliveryFrom: '24hrs', deliveryTo: '94hrs'},
                pastWorksImages: [i1, i2, i3, i4]

            }
        }
    ]
}


const ReducerData =(state=initialState)=>{
    return{
        ...state
    }
}

export default ReducerData