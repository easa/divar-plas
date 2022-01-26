import React from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';

const Social = () => {
    return ( 
        <Fragment>
        <h3 className='w-100 head-c'>اجتماعی<Link to='/classific'> <i className='fas fa-angle-right text-dark mx-2'></i></Link></h3>
        <div  className="class-box">
        <i className='fas fa-angle-left'></i>
            <div className='class-box-s'>
                 <p>رویداد</p> 
            </div>
        </div>
        <div className="class-box">
      <i className='fas fa-angle-left'></i>
        <div className='class-box-s'>
       <p>داوطلبانه</p>  
      </div>
        </div>
        <div className="class-box">
      <i className='fas fa-angle-left'></i>
        <div className='class-box-s'>
       <p>گم شده ها</p>  
      </div>
        </div>
        <div className="class-box">
       <p>همه آگهی های اجتماعی </p>  
<i className='fas fa-users mx-2 fa-2x'></i>

        </div>
     </Fragment>
     );
}
 
export default Social;