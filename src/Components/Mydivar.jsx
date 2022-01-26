import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
const MyDivar = () => {
    return ( 
        <Fragment>
            <h3 className='w-100 head-c'>دیوار من</h3>
            <p className='text-start p-2'>شما با این شماره وارد شده ایدو آگهی های ثبت شده با این شماره را مشاهده می کنید</p>
            <div className='w-100 my-4'>
              <button className='btn mx-2 btn-outline-dark'>خروج از حساب</button>
            </div>
            <div className='class-box'>
            <i className='fas fa-angle-left'></i>
                <div className='class-box-s'>
                     <p>آگهی های من</p> 
                     <i className='fas fa-user mx-4' ></i>
                </div>
            </div>
            <div className='class-box'>
            <i className='fas fa-angle-left'></i>
                <div className='class-box-s'>
                     <p>پرداخت های من</p> 
                     <i className='fas fa-credit-card mx-4' ></i>
                </div>
            </div>
            <div className='class-box'>
            <i className='fas fa-angle-left'></i>
                <div className='class-box-s'>
                     <p>نشان ها و یادداشت ها</p> 
                     <i className='fas fa-bookmark mx-4' ></i>
                </div>
            </div>
            <div className='class-box'>
            <i className='fas fa-angle-left'></i>
                <div className='class-box-s'>
                     <p>بازدید های اخیر</p> 
                     <i className='fas fa-clock mx-4' ></i>
                </div>
            </div>
            <div className='class-box'>
            <i className='fas fa-angle-left'></i>
                <div className='class-box-s'>
                     <p>تنظیمات</p> 
                     <i className='fas fa-cogs mx-4' ></i>
                </div>
            </div>
            <div className='class-box'>
            <i className='fas fa-angle-left'></i>
                <div className='class-box-s'>
                     <p>دیوار برای کسب و کار ها</p> 
                     <i className='fas fa-house-user mx-4' ></i>
                </div>
            </div>
            <div className='class-box'>
            <i className='fas fa-angle-left'></i>
                <div className='class-box-s'>
                     <p>پشتیبانی و قوانین</p> 
                     <i className='fas fa-balance-scale-right mx-4' ></i>
                </div>
            </div>
            <div className='class-box'>
            <i className='fas fa-angle-left'></i>
                <div className='class-box-s'>
                     <p>درباره دیوار</p> 
                     <i className='fas fa-book mx-4' ></i>
                </div>
            </div>
        </Fragment>
     );
}
 
export default MyDivar;