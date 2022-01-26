import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { Link } from 'react-router-dom';

const Classification = () => {
    return ( 
        <Fragment>

            <h3 className='w-100 head-c'>دسته بندی آگهی ها</h3>
            <Link  className="class-box" to="/Landed">
          <i className='fas fa-angle-left'></i>
                <div className='class-box-s'>
                     <p>املاک</p> 
                     <i className='fas fa-building mx-2' ></i>
                </div>
            </Link>
            <Link className="class-box" to="/Cares">
          <i className='fas fa-angle-left'></i>

         <div className='class-box-s'>
           <p>وسایل نقلیه</p>  
              <i className='fas fa-car mx-2'></i>
               </div>
           
            </Link>
            <Link className="class-box" to="/Digital">
          <i className='fas fa-angle-left'></i>
            <div className="class-box-s">
      <p>کالای دیجیتال</p>  
                  <i className='fas fa-mobile-alt mx-2'></i>
            </div>
        
            </Link>
            <Link className="class-box" to="/kitchen">
          <i className='fas fa-angle-left'></i>
<dic className="class-box-s">
       <p>خانه و آشپزخانه</p>
    <i className='fas fa-carrot mx-2'></i>
</dic>
            
            </Link>
            <Link className="class-box" to="/service">
          <i className='fas fa-angle-left'></i>
             <div className="class-box-s">
       <p>خدمات</p>
     <i className='fas fa-user-tie mx-2'></i>
            </div>
           
            </Link>
            <Link className="class-box" to="/Personal">
          <i className='fas fa-angle-left'></i>
           <div className="class-box-s">
     <p>وسایل شخصی</p>
     <i className='fas fa-child mx-2'></i>
              </div>
           
            </Link>
            <Link className="class-box" to="/Rest">
          <i className='fas fa-angle-left'></i>
          <div className="class-box-s">
     <p>سرگرمی و فراغت</p> 
            <i className='fas fa-puzzle-piece mx-2'></i>
          </div>

            </Link>
            <Link className="class-box" to="/Equipment">
          <i className='fas fa-angle-left'></i>
          <div className="class-box-s">
       <p>تجهیزات</p> 
               <i className='fas fa-broom mx-2'></i>
          </div>

           
            </Link>
            <Link className="class-box" to="/Socail">
          <i className='fas fa-angle-left'></i>
            <div className="class-box-s">
       <p>اجتماعی</p>  
                     <i className='fas fa-users mx-2'></i>
            </div>
     
            </Link>
            <Link className="class-box" to="/Recruitment">
          <i className='fas fa-angle-left'></i>
            <div className="class-box-s">
       <p>استخدام</p> 
                        <i className='fas fa-running mx-2'></i>
            </div>
   
            </Link>

        </Fragment>
     );
}
 
export default Classification;