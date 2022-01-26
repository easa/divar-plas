import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { Link } from 'react-router-dom';
const Cares = () => {
    return (<Fragment>
                    <h3 className='w-100 head-c'>وسیله نقلیه<Link to='/classific'> <i className='fas fa-angle-right text-dark mx-2'></i></Link></h3>
            <div  className="class-box">
            <i className='fas fa-angle-left'></i>
                <div className='class-box-s'>
                     <p>خودرو</p> 
                </div>
            </div>
            <div className="class-box">
          <i className='fas fa-angle-left'></i>
            <div className='class-box-s'>
           <p>قطعات یدکی و لوازم جانبی خودرو</p>  
          </div>
            </div>
            <div className="class-box">
          <i className='fas fa-angle-left'></i>
            <div className='class-box-s'>
           <p>موتور سیکلت و لوازم جانبی</p>  
          </div>
            </div>
            <div className="class-box">
          <i className='fas fa-angle-left'></i>
            <div className='class-box-s'>
           <p>قایق و لوازم جانبی</p>  
          </div>
            </div>
            <div className="class-box">
           <p>همه آگهی های وسایل نقلیه</p>  
    <i className='fas fa-car mx-2 fa-2x'></i>
   
            </div>
    </Fragment>  );
}
 
export default Cares;