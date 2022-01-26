import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { Link } from 'react-router-dom';
 const Landed = () => {
     return ( 
         <Fragment>
            <h3 className='w-100 head-c'>املاک <Link to='/classific'> <i className='fas fa-angle-right text-dark mx-2'></i></Link></h3>
            <div  className="class-box">
            <i className='fas fa-angle-left'></i>
                <div className='class-box-s'>
                     <p>فروش مسکونی</p> 
                </div>
            </div>
            <div className="class-box">
          <i className='fas fa-angle-left'></i>
            <div className='class-box-s'>
           <p>اجاره مسکونی</p>  
          </div>
            </div>
            <div className="class-box">
          <i className='fas fa-angle-left'></i>
            <div className='class-box-s'>
           <p>فروش اداری و تجاری</p>  
          </div>
            </div>
            <div className="class-box">
          <i className='fas fa-angle-left'></i>
            <div className='class-box-s'>
           <p>اجاره اداره و تجاری</p>  
          </div>
            </div>
            <div className="class-box">
          <i className='fas fa-angle-left'></i>
            <div className='class-box-s'>
           <p>اجاره کوتاه مدت</p>  
          </div>
            </div>
            <div className="class-box">
          <i className='fas fa-angle-left'></i>
            <div className='class-box-s'>
           <p>پروژه های ساخت و ساز</p>  
          </div>
            </div>
            <div className="class-box">
           <p>همه آگهی های املاک</p>  
    <i className='fas fa-building mx-2 fa-2x'></i>
   
            </div>
         </Fragment>
      );
 }
  
 export default Landed;