import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { Link } from 'react-router-dom';
const Rest = () => {
    return (      <Fragment>
        <h3 className='w-100 head-c'>سرگرمی و فراغت<Link to='/classific'> <i className='fas fa-angle-right text-dark mx-2'></i></Link></h3>
        <div  className="class-box">
        <i className='fas fa-angle-left'></i>
            <div className='class-box-s'>
                 <p>بلیط</p> 
            </div>
        </div>
        <div className="class-box">
      <i className='fas fa-angle-left'></i>
        <div className='class-box-s'>
       <p>تور و چارتر</p>  
      </div>
        </div>
        <div className="class-box">
      <i className='fas fa-angle-left'></i>
        <div className='class-box-s'>
       <p>کتاب  مجله</p>  
      </div>
        </div>
        <div className="class-box">
      <i className='fas fa-angle-left'></i>
        <div className='class-box-s'>
       <p>دوچرخه/اسکیت/اسکوتر</p>  
      </div>
        </div>
        <div className="class-box">
      <i className='fas fa-angle-left'></i>
        <div className='class-box-s'>
       <p>حیوانات</p>  
      </div>
        </div>
        <div className="class-box">
      <i className='fas fa-angle-left'></i>
        <div className='class-box-s'>
       <p>کلکسیون و سرگرمی</p>  
      </div>
        </div>
        <div className="class-box">
      <i className='fas fa-angle-left'></i>
        <div className='class-box-s'>
       <p>آلات موسیقی</p>  
      </div>
        </div>
        <div className="class-box">
      <i className='fas fa-angle-left'></i>
        <div className='class-box-s'>
       <p>ورزش و تناسب اندام</p>  
      </div>
        </div>
        <div className="class-box">
      <i className='fas fa-angle-left'></i>
        <div className='class-box-s'>
       <p>اسباب بازی</p>  
      </div>
        </div>
        <div className="class-box">
       <p>همه آگهی های سرگرمی و فراغت</p>  
<i className='fas fa-puzzle-piece mx-2 fa-2x'></i>

        </div>
     </Fragment> );
}
 
export default Rest;