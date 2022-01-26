import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { Link } from 'react-router-dom';
const Equipment = () => {
    return ( 
        <Fragment>
        <h3 className='w-100 head-c'>تجهیزات و صنعتی<Link to='/classific'> <i className='fas fa-angle-right text-dark mx-2'></i></Link></h3>
        <div  className="class-box">
        <i className='fas fa-angle-left'></i>
            <div className='class-box-s'>
                 <p>ابزارآلات</p> 
            </div>
        </div>
        <div className="class-box">
      <i className='fas fa-angle-left'></i>
        <div className='class-box-s'>
       <p>ماشین آلات صنعتی</p>  
      </div>
        </div>
        <div className="class-box">
      <i className='fas fa-angle-left'></i>
        <div className='class-box-s'>
       <p>تجهیزات کسب و کار</p>  
      </div>
        </div>
        <div className="class-box">
      <i className='fas fa-angle-left'></i>
        <div className='class-box-s'>
       <p>عمده فروشی</p>  
      </div>
        </div>
        <div className="class-box">
       <p>همه آگهی های تجهیزات و صنعتی</p>  
<i className='fas fa-broom  mx-2 fa-2x'></i>

        </div>
     </Fragment>
     );
}
 
export default Equipment;