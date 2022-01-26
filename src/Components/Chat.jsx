import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { useContext } from 'react/cjs/react.development';
import simpleContext from './../context';

const Chat = () => {
    const context=useContext(simpleContext);
    const getName=context.getName;
    return ( 
        <Fragment>
            <Routes>
                <Route path="/Chat" element={
                    <div>            <div className=' head-c'>
            <i className='fas fa-ellipsis-v mx-1' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom"></i>
            <h3 className='w-100'>...درحال اتصال</h3>
            </div>

<div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
  <div class="offcanvas-header">
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body small text-start">
  <Link to="/ChatSetting" className='btn'> تنظیمات<i className='fas fa-cog mx-2'></i></Link>
  </div>
</div></div>}></Route>
                <Route path="/ChatSetting" element={
                    <div>
        <h3 className='w-100 head-c'>تنظیمات چت دیوار<Link to='/Chat'> <i className='fas fa-angle-right text-dark mx-2'></i></Link></h3>
        <Link className='class-box' to="/ChangeName">
            <p className='lead'>{getName}</p>
            <p>نام من</p>
        </Link>            
        <div className='form-check form-switch class-box'>
            <input className='form-check-input' type="checkbox" role="switch" id="flexSwitchCheckChecked"></input>
            <label className='form-check-label' for="flexSwitchCheckChecked">نمایش مکالمه های غیر فعال</label>
        </div>
        <div className='form-check form-switch class-box'>
            <input className='form-check-input' type="checkbox" role="switch" id="flexSwitchCheckChecked"></input>
            <label className='form-check-label' for="flexSwitchCheckChecked">نمایش نوتیفیکیشن ها</label>
        </div>
        <div className='form-check form-switch class-box'>
            <input className='form-check-input' type="checkbox" role="switch" id="flexSwitchCheckChecked"></input>
            <label className='form-check-label' for="flexSwitchCheckChecked">پخش صدای نوتیفیکیشن ها</label>
        </div>
        <div className='form-check form-switch class-box'>
            <input className='form-check-input' type="checkbox" role="switch" id="flexSwitchCheckChecked"></input>
            <label className='form-check-label' for="flexSwitchCheckChecked">لرزش هنگام دریافت نوتیفیکیشن ها</label>
        </div>
        <div className='form-check form-switch class-box'>
            <input className='form-check-input' type="checkbox" role="switch" id="flexSwitchCheckChecked"></input>
            <label className='form-check-label' for="flexSwitchCheckChecked">نمایش مکالمه های مسدود شده</label>
        </div>
                    </div>
                }></Route>
            </Routes>

        </Fragment>
     );
}
 
export default Chat;