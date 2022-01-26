import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { Link } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import simpleContext from './../context';
const ChangeName = () => {
    const context=useContext(simpleContext);
    const getName=context.getName;
    const setName=context.setName;
    let name=getName;
    return ( 
        <Fragment>
        <div className="w-100 text-center">
        <h3 className='w-100 head-c'>نام من<Link to='/ChatSetting'> <i className='fas fa-angle-right text-dark mx-4'></i></Link></h3>
         <h4 className='text-start p-1'>نام و نام خانوادگی خود را وارد کنید</h4>
         <p className='text-start p-1'>نام شما در مکالمه با کاربران چت دیوار نمایش داده می شود.(بین 5 تا 20 حرف)</p>
        <input className='mx-auto text-start p-1 w-75 my-5' type="text" onChange={(e)=>name=e.target.value} placeholder={getName}></input>
            </div>
        <div className='d-flex justify-content-center my-5'> 
            <Link className='btn mx-3 btn-outline-danger' onClick={()=>setName(name)} to="/ChatSetting">
                ذخیره نام
            </Link>
            <Link className='btn mx-3 btn-outline-danger' to="/ChatSetting">
            انصراف
            </Link>
           
        </div>
        </Fragment>
     );
}
 
export default ChangeName;