import React from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
const Recruitment = () => {
    return ( 
        <Fragment>
        <h3 className='w-100 head-c'>استخدام و کارایی<Link to='/classific'> <i className='fas fa-angle-right text-dark mx-2'></i></Link></h3>
        <div  className="class-box">
        <i className='fas fa-angle-left'></i>
            <div className='class-box-s'>
                 <p>اداری و مدیریت</p> 
            </div>
        </div>
        <div className="class-box">
      <i className='fas fa-angle-left'></i>
        <div className='class-box-s'>
       <p>سرایداری و نظافت</p>  
      </div>
        </div>
        <div className="class-box">
      <i className='fas fa-angle-left'></i>
        <div className='class-box-s'>
       <p>معماری،عمران و ساختمانی</p>  
      </div>
        </div>
        <div  className="class-box">
        <i className='fas fa-angle-left'></i>
            <div className='class-box-s'>
                 <p>رایانه و فناوری اطلاعات</p> 
            </div>
        </div>
        <div className="class-box">
      <i className='fas fa-angle-left'></i>
        <div className='class-box-s'>
       <p>مالی و حسابداری و حقوقی</p>  
      </div>
        </div>
        <div className="class-box">
      <i className='fas fa-angle-left'></i>
        <div className='class-box-s'>
       <p>بازاریابی و فروش</p>  
      </div>
        </div>
        <div  className="class-box">
        <i className='fas fa-angle-left'></i>
            <div className='class-box-s'>
                 <p>صنعتی و فنی و مهندسی</p> 
            </div>
        </div>
        <div className="class-box">
      <i className='fas fa-angle-left'></i>
        <div className='class-box-s'>
       <p>آموزشی</p>  
      </div>
        </div>
        <div className="class-box">
      <i className='fas fa-angle-left'></i>
        <div className='class-box-s'>
       <p>حمل و نقل</p>  
      </div>
        </div>
        <div  className="class-box">
        <i className='fas fa-angle-left'></i>
            <div className='class-box-s'>
                 <p>درمانی و زیبایی و بهداشتی</p> 
            </div>
        </div>
        <div className="class-box">
      <i className='fas fa-angle-left'></i>
        <div className='class-box-s'>
       <p>هنری و رسانه</p>  
      </div>
        </div>
        <div className="class-box">
       <p>همه آگهی های استخدام و کارایی </p>  
<i className='fas fa-running mx-2 fa-2x'></i>

        </div>
     </Fragment>
     );
}
 
export default Recruitment;