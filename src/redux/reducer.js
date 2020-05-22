
//business card here
import b1 from '../assets/files/graphics_and_design/business_card/b1.jpg'
import b2 from '../assets/files/graphics_and_design/business_card/b2.jpg'
import b3 from '../assets/files/graphics_and_design/business_card/b3.jpg'
import b4 from '../assets/files/graphics_and_design/business_card/bn1.jpg'

//cantoon logo
import c1 from '../assets/files/graphics_and_design/cantoon_logo/c1.jpg'
import c2 from '../assets/files/graphics_and_design/cantoon_logo/c2.jpg'
import c3 from '../assets/files/graphics_and_design/cantoon_logo/c3.jpg'
import c4 from '../assets/files/graphics_and_design/cantoon_logo/c4.jpg'
import c5 from '../assets/files/graphics_and_design/cantoon_logo/c5.jpg'
import c6 from '../assets/files/graphics_and_design/cantoon_logo/cn1.jpg'
import c7 from '../assets/files/graphics_and_design/cantoon_logo/cn2.jpg'
import c8 from '../assets/files/graphics_and_design/cantoon_logo/cn3.jpg'
import c9 from '../assets/files/graphics_and_design/cantoon_logo/cn4.jpg'


//fliers
import f1 from '../assets/files/graphics_and_design/fliers/f1.jpg'
import f2 from '../assets/files/graphics_and_design/fliers/f2.jpg'
import f3 from '../assets/files/graphics_and_design/fliers/f3.jpg'
import f4 from '../assets/files/graphics_and_design/fliers/f4.jpg'
import f5 from '../assets/files/graphics_and_design/fliers/fn1.jpg'
import f6 from '../assets/files/graphics_and_design/fliers/fn2.jpg'
import f7 from '../assets/files/graphics_and_design/fliers/fn3.jpg'
import f8 from '../assets/files/graphics_and_design/fliers/fn4.jpg'
import f9 from '../assets/files/graphics_and_design/fliers/fn5.jpg'

//illustration
import i1 from '../assets/files/graphics_and_design/illustration/i1.jpg'
import i2 from '../assets/files/graphics_and_design/illustration/i2.jpg'
import i3 from '../assets/files/graphics_and_design/illustration/i3.jpg'
import i4 from '../assets/files/graphics_and_design/illustration/i4.jpg'
import i5 from '../assets/files/graphics_and_design/illustration/in0.jpg'
import i6 from '../assets/files/graphics_and_design/illustration/in1.jpg'
import i7 from '../assets/files/graphics_and_design/illustration/in2.jpg'
import i8 from '../assets/files/graphics_and_design/illustration/in3.jpg'
import i9 from '../assets/files/graphics_and_design/illustration/in4.jpg'
import i10 from '../assets/files/graphics_and_design/illustration/in5.jpg'
import i11 from '../assets/files/graphics_and_design/illustration/in6.jpg'
import i12 from '../assets/files/graphics_and_design/illustration/in7.jpg'
import i13 from '../assets/files/graphics_and_design/illustration/in8.jpg'
import i14 from '../assets/files/graphics_and_design/illustration/in9.jpg'
import i15 from '../assets/files/graphics_and_design/illustration/in11.jpg'
import i16 from '../assets/files/graphics_and_design/illustration/in12.jpg'
import i17 from '../assets/files/graphics_and_design/illustration/in13.jpg'
import i18 from '../assets/files/graphics_and_design/illustration/in14.jpg'
import i19 from '../assets/files/graphics_and_design/illustration/in15.jpg'
import i20 from '../assets/files/graphics_and_design/illustration/in16.jpg'
import i21 from '../assets/files/graphics_and_design/illustration/in17.jpg'
import i22 from '../assets/files/graphics_and_design/illustration/in18.jpg'
import i23 from '../assets/files/graphics_and_design/illustration/in19.jpg'
import i24 from '../assets/files/graphics_and_design/illustration/in20.jpg'



//logo design
import l1 from '../assets/files/graphics_and_design/logo_design/l1.jpg'
import l2 from '../assets/files/graphics_and_design/logo_design/l2.jpg'
import l3 from '../assets/files/graphics_and_design/logo_design/l3.jpg'
import l4 from '../assets/files/graphics_and_design/logo_design/l4.jpg'
import l5 from '../assets/files/graphics_and_design/logo_design/ln1.jpg'
import l6 from '../assets/files/graphics_and_design/logo_design/ln2.jpg'
import l7 from '../assets/files/graphics_and_design/logo_design/ln3.jpg'
import l8 from '../assets/files/graphics_and_design/logo_design/ln4.jpg'
import l9 from '../assets/files/graphics_and_design/logo_design/ln5.jpg'
import l10 from '../assets/files/graphics_and_design/logo_design/ln6.jpg'
import l11 from '../assets/files/graphics_and_design/logo_design/ln7.jpg'

//youtube intro and outros
import y1 from '../assets/mainPage/y1.png'


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
                pastWorksImages: [
                    {image: true, value: l1}, 
                    {image: true, value: l2}, 
                    {image: true, value: l3}, 
                    {image: true, value: l4},
                    {image: true, value: l5},
                    {image: true, value: l6},
                    {image: true, value: l7},
                    {image: true, value: l8},
                    {image: true, value: l9},
                    {image: true, value: l10},
                    {image: true, value: l11},

                ]
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
                pastWorksImages: [{image: true, value: b1}, {image: true, value: b2}, {image: true, value: b3},{image: true, value: b4}]
               
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
                pastWorksImages: [{image: true, value: c1},
                    {image: true, value: c2}, 
                    {image: true, value: c3}, 
                    {image: true, value: c4},
                    {image: true, value: c5},
                    {image: true, value: c6},
                    {image: true, value: c7},
                    {image: true, value: c8},
                    {image: true, value: c9},
                ]
                
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
                pastWorksImages: [
                    {image: true, value: f1}, 
                    {image: true, value: f2},
                    {image: true, value: f3}, 
                    {image: true, value: f4},
                    {image: true, value: f5},
                    {image: true, value: f6},
                    {image: true, value: f7},
                    {image: true, value: f8},
                    {image: true, value: f9},
                ]
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
                pastWorksImages: [
                    {image: true, value: i1}, 
                    {image: true, value: i2}, 
                    {image: true, value: i3}, 
                    {image: true, value: i4},
                    {image: true, value: i5},
                    {image: true, value: i6},
                    {image: true, value: i7},
                    {image: true, value: i8},
                    {image: true, value: i9},
                    {image: true, value: i10},
                    {image: true, value: i11},
                    {image: true, value: i12},
                    {image: true, value: i13},
                    {image: true, value: i14},
                    {image: true, value: i15},
                    {image: true, value: i16},
                    {image: true, value: i17},
                    {image: true, value: i18},
                    {image: true, value: i19},
                    {image: true, value: i20},
                    {image: true, value: i21},
                    {image: true, value: i22},
                    {image: true, value: i23},
                    {image: true, value: i23},
                    {image: true, value: i24},
                ]

            }
        },

        {
            realName: 'YouTube Intro and Outros',
            subName: 'youtube-intro',
            categoryUrl: '/graphics-design',
            subImage: y1,
            subData: {
                categoryName: 'Graphics Design',
                subCategoryDescripText: 'Stunning youtube intro and outro to boost followers',
                startingPrice: '$5',
                
                deliveryTime: {deliveryFrom: '24hrs', deliveryTo: '94hrs'},
                pastWorksImages: [
                    {image: true, value: y1}, 
                    {image: false, value: 'https://youtu.be/LGSDS9N7vS0'}, 
                    {image: false, value: 'https://youtu.be/Nm1bAVGCTRQ'},
                    {image: false, value: 'https://youtu.be/zix10b0mnJQ'}
                ]
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