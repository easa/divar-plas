import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { Link } from 'react-router-dom';
const Service = () => {
    return ( 
        <Fragment>
        <h3 className='w-100 head-c'>خدمات<Link to='/classific'> <i className='fas fa-angle-right text-dark mx-2'></i></Link></h3>
        <div  className="class-box">
        <i className='fas fa-angle-left'></i>
            <div className='class-box-s'>
                 <p>موتور و ماشین</p> 
            </div>
        </div>
        <div className="class-box">
      <i className='fas fa-angle-left'></i>
        <div className='class-box-s'>
       <p>پذیرایی/مراسم</p>  
      </div>
        </div>
        <div className="class-box">
      <i className='fas fa-angle-left'></i>
        <div className='class-box-s'>
       <p>خدمات رایانه ای و موبایل</p>  
      </div>
        </div>
        <div className="class-box">
      <i className='fas fa-angle-left'></i>
        <div className='class-box-s'>
       <p>مالی/حسابداری/بیمه</p>  
      </div>
        </div>
        <div className="class-box">
      <i className='fas fa-angle-left'></i>
        <div className='class-box-s'>
       <p>حمل و نقل</p>  
      </div>
        </div>
        <div className="class-box">
      <i className='fas fa-angle-left'></i>
        <div className='class-box-s'>
       <p>پیشه و مهارت</p>  
      </div>
        </div>
        <div className="class-box">
      <i className='fas fa-angle-left'></i>
        <div className='class-box-s'>
       <p>آرایشگری و زیبایی</p>  
      </div>
        </div>
        <div className="class-box">
      <i className='fas fa-angle-left'></i>
        <div className='class-box-s'>
       <p>سرگرمی</p>  
      </div>
        </div>
        <div className="class-box">
      <i className='fas fa-angle-left'></i>
        <div className='class-box-s'>
       <p>نظافت</p>  
      </div>
        </div>
        <div className="class-box">
      <i className='fas fa-angle-left'></i>
        <div className='class-box-s'>
       <p>باغبانی و درختکاری</p>  
      </div>
        </div>
        <div className="class-box">
      <i className='fas fa-angle-left'></i>
        <div className='class-box-s'>
       <p>آموزشی</p>  
      </div>
        </div>
        <div className="class-box">
       <p>همه آگهی های خدمات</p>  
<i className='fas fa-user-tie  mx-2 fa-2x'></i>

        </div>
     </Fragment>
     );
}
 
export default Service;