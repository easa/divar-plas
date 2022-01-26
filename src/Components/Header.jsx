import React from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import {Swiper,SwiperSlide} from 'swiper/react/swiper-react.js';
import 'swiper/swiper-bundle.css'

const Header = () => {
    return (  
        <Fragment>
          <div className='head'>
            <div className='search'>
              <span className='mx-2'> <i className='fas fa-search'></i></span>
               <input type="text" placeholder='جستجو در همه آگهی ها'/>
               <span>تالش<i className='fas fa-location-arrow'></i></span>
            </div>
            <Swiper slidesPerView={4} spaceBetween={30} freeMode={true} pagination={{
  "clickable": true
}} className="mySwiper">
     <SwiperSlide key={0} tag='li'>
       <Link to="/Landed" className='link'>   <i className='fas fa-building icon' ></i>
       </Link>
      
     </SwiperSlide>
     <SwiperSlide key={1} tag='li'>
     <Link to="/Cares" className='link'> 
      <i className='fas fa-car icon'></i>
         
     </Link>
          
     </SwiperSlide>
     <SwiperSlide key={2} tag='li'>
     <Link to="/Digital" className='link'> 
           <i className='fas fa-mobile-alt icon'></i>
     </Link>

     </SwiperSlide>
     <SwiperSlide key={3} tag='li'>
     <Link to="/kitchen" className='link'> 
      <i className='fas fa-carrot icon'></i>
  
     </Link>
      
     </SwiperSlide>
     <SwiperSlide key={4} tag='li'>
     <Link to="/service" className='link'> 
            <i className='fas fa-user-tie icon'></i>
      
     </Link>

     </SwiperSlide>
     <SwiperSlide key={5} tag='li'>
     <Link to="/Personal" className='link'> 
     
     <i className='fas fa-child icon'></i>

     </Link>
     </SwiperSlide>
     <SwiperSlide key={6} tag='li'>
     <Link to="/Rest" className='link'> 
       <i className='fas fa-puzzle-piece icon'></i>
 
     </Link>
   
     </SwiperSlide>
     <SwiperSlide key={7} tag='li'>
     <Link to="/Equipment" className='link'> 
          <i className='fas fa-broom icon'></i>
     </Link>
     </SwiperSlide>
     <SwiperSlide key={8} tag='li'>
     <Link to="/Socail" className='link'> 
      <i className='fas fa-users icon'></i>
     </Link>
      
           </SwiperSlide>
     <SwiperSlide key={9} tag='li'>
     <Link to="/Recruitment" className='link'> 
  <i className='fas fa-running icon'></i>
     </Link>
      
  
     </SwiperSlide>


    </Swiper>
          </div>  
        </Fragment>
    );
}
 
export default Header;