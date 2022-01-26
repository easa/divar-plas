import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { useContext } from 'react/cjs/react.development';
import simpleContext from './../context';
import {Swiper,SwiperSlide} from 'swiper/react/swiper-react.js';
import 'swiper/swiper-bundle.css'
import SwiperCore, {Pagination} from 'swiper';
import { Link } from 'react-router-dom';
  
const SingleNotice = () => {
    const context=useContext(simpleContext);
    const notice=context.getSingleNotice;
    SwiperCore.use([Pagination]);
    return ( <Fragment>
        <div className='w-100 p-2'>
            <div className='75 mx-auto my-2 h-50'>
        <Swiper pagination={true} className="MySwiper">
            {notice.ImageUrl.map((i)=>{
                return(
                    <SwiperSlide><img src={i} className='w-100 h-100'/></SwiperSlide>  
                )
            })}
  </Swiper>
           

            </div>

         
        
          
        </div>
     <div className='text-start p-2 explation'>
           <p className='display-6 my-3'>{notice.label}</p>
           <p className='border-bottom p-2'>{notice.class}</p> 
           <h4>توضیحات</h4>
           <p className='p-2'>{notice.explanation}</p>
           <p className='p-2 h3 border-bottom'>{notice.price} تومان</p>
           <div className='d-flex justify-content-center my-5'> 
            <Link  className='btn mx-3 btn-danger w-25' to="/Chat">
                چت
            </Link>
            <Link className='btn mx-3 btn-danger w-25' to="/">
                تماس
            </Link>
           
        </div>
     </div>
           

    </Fragment> );
}
 
export default SingleNotice;