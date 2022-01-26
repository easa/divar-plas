import { React,useContext } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import simpleContext from './../context';
import { Link } from 'react-router-dom';


const NoticeShow = () => {
    const context=useContext(simpleContext);
    const getNotices=context.getNotices
    const setSingleNotice=context.setSingleNotice;
    const handleSinglNotice=(label,Class,price,ImageUrl,explanation)=>{
        const notic={
            label,
  explanation,
  price,
  class:Class,
  ImageUrl,
        }
setSingleNotice(notic);
console.log("yes");
    }
    return (<Fragment>
           {
               getNotices.map((n)=>{
                 return(
                     <Link className='notices' to="/SingleNotice" onClick={()=>handleSinglNotice(n.label,n.class,n.price,n.ImageUrl,n.explanation)}>
                         <img src={n.ImageUrl[0]}/>
                         
                         <div className='notice-box'>  <p>{n.label}</p>
                         <div> <p>{n.price} تومان</p> 
                         <p className='p'>{n.class}</p></div>
                        </div>
                    
                     </Link>

                 )
               })
           }
    </Fragment>  );
}
 
export default NoticeShow;