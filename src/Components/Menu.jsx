import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import simpleContext from './../context';
const Menu = () => {
    const context=useContext(simpleContext);
    const getM=context.getM;
    const setM=context.setM;
const activeLink=(e)=>{
switch(e){
    case 1:
         setM([1,0,0,0,0]);
    break;
    case 2:
        setM([0,1,0,0,0]);
    break;
    case 3:
        setM([0,0,1,0,0]);
    break;
    case 4:
        setM([0,0,0,1,0]);
    break;
    case 5:
        setM([0,0,0,0,1]);
    break;
}
}
    return ( <Fragment>
        <div className="menu c">
 <div className="navigation c">
                <Link to="/Mydivar">
                 <span className="icon"><i className="fas fa-user"></i></span>
                 <span className="text">دیوار من</span>
                </Link>
                <Link to="/Chat">
                 <span className="icon"><i className="fas fa-comments"></i></span>
                 <span className="text">چت</span>
                </Link>
                <Link to="/Notice">
                 <span className="icon"><i className="fas fa-plus-circle"></i></span>
                 <span className="text">ثبت آگهی</span>
                </Link>
                <Link to='/classific'>
                 <span className="icon"><i className="fas fa-align-justify"></i></span>
                 <span className="text">دسته ها</span>
                </Link>
                <Link to="/">
                 <span className="icon"><i className="fas fa-bullhorn"></i></span>
                 <span className="text">آگهی ها</span>
                </Link>
     
    </div>
        </div>
   
    </Fragment> );
}
 
export default Menu;