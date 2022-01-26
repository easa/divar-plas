import React from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
const Personal = () => {
    return (
        <Fragment>
        <h3 className='w-100 head-c'>وسایل شخصی<Link to='/classific'> <i className='fas fa-angle-right text-dark mx-2'></i></Link></h3>
        <div  className="class-box">
        <i className='fas fa-angle-left'></i>
            <div className='class-box-s'>
                 <p>کیف ، کفش و لباس</p> 
            </div>
        </div>
        <div className="class-box">
      <i className='fas fa-angle-left'></i>
        <div className='class-box-s'>
       <p>زیورآلات و اکسسوری</p>  
      </div>
        </div>
        <div className="class-box">
      <i className='fas fa-angle-left'></i>
        <div className='class-box-s'>
       <p>آرایشی ، بهداشتی و درمانی</p>  
      </div>
        </div>
        <div className="class-box">
      <i className='fas fa-angle-left'></i>
        <div className='class-box-s'>
       <p>کفش و لباس بچه</p>  
      </div>
        </div>
        <div className="class-box">
      <i className='fas fa-angle-left'></i>
        <div className='class-box-s'>
       <p>وسایل بچه و اسباب بازی</p>  
      </div>
        </div>
        <div className="class-box">
      <i className='fas fa-angle-left'></i>
        <div className='class-box-s'>
       <p>لوازم التحریر</p>  
      </div>
        </div>
        <div className="class-box">
       <p>همه آگهی های وسایل شخصی </p>  
<i className='fas fa-child mx-2 fa-2x'></i>

        </div>
     </Fragment>
      );
}
 
export default Personal;