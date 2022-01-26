import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { Link } from 'react-router-dom';
const Digital = () => {
    return ( 
        <Fragment>
        <h3 className='w-100 head-c'>کالای دیجیتال <Link to='/classific'> <i className='fas fa-angle-right text-dark mx-2'></i></Link></h3>
        <div  className="class-box">
        <i className='fas fa-angle-left'></i>
            <div className='class-box-s'>
                 <p>موبایل و تبلت</p> 
            </div>
        </div>
        <div className="class-box">
      <i className='fas fa-angle-left'></i>
        <div className='class-box-s'>
       <p>رایانه</p>  
      </div>
        </div>
        <div className="class-box">
      <i className='fas fa-angle-left'></i>
        <div className='class-box-s'>
       <p>کنسول ، بازی ویدئویی و آنلاین</p>  
      </div>
        </div>
        <div className="class-box">
      <i className='fas fa-angle-left'></i>
        <div className='class-box-s'>
       <p>صوتی و تصویری</p>  
      </div>
        </div>
        <div className="class-box">
      <i className='fas fa-angle-left'></i>
        <div className='class-box-s'>
       <p>تلفن رومیزی</p>  
      </div>
        </div>
        <div className="class-box">
       <p>همه آگهی های کالای دیجیتال</p>  
<i className='fas fa-mobile-alt mx-2 fa-2x'></i>

        </div>
     </Fragment>
     );
}
 
export default Digital;