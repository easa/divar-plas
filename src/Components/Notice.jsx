import { React,useState, useContext } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { Link } from 'react-router-dom';
import simpleContext from './../context';
const Notice = () => {
    const [image,setImage]=useState([]);
    const [preview,setpreview]=useState([]);
    const [label,setlabel]=useState("");
    const [explanation,setexplanation]=useState("");
    const [Class,setClass]=useState("املاک");
    const [price,setprice]=useState("");
    const context=useContext(simpleContext);
    const getNotices=context.getNotices;
    const setNotices=context.setNotices;
    const handelImage=(url)=>{
    const images=image;
    images.push(url)
    setImage(images);
    for(let n of image){
        const reader=new FileReader();
        reader.onloadend=()=>{
            const previewes=preview;
            previewes.push(reader.result)
            setpreview(previewes);
        }
        reader.readAsDataURL(n);
    }
    }
    const handelform=(e)=>{
    e.preventDefault();
    let Notices=getNotices;
    if(label !=="" && explanation !== "" && Class !== "" && price !==""){
        const notic={
            label,
  explanation,
  price,
  class:Class,
  ImageUrl:preview,
        }
    Notices.push(notic);
    setNotices(Notices);
    setClass("");
    setlabel("");
    setprice("");
    setpreview([]);
    setexplanation("");
}
    }
    return (<Fragment>
        <form id='myform' name='myform'>
              <div className=' head-c'>
            <input type="reset" className='fas fa-redo mx-1'></input>
            <h3 className='w-100'>ثبت آگهی</h3>
            </div> 
            <h4 className='my-4 text-start mx-4'>دسته بندی</h4>
<select class="form-select text-start w-75 mx-auto my-2" aria-label="Default select example" onChange={(e)=>setClass(e.target.value)}>
  <option value="املاک">املاک</option>
  <option value="وسایل نقلیه">وسایل نقلیه</option>
  <option value="کالای دیجیتال">کالای دیجیتال</option>
  <option value="خانه و آشپزخانه">خانه و آشپزخانه</option>
  <option value="خدمات">خدمات</option>
  <option value="وسایل شخصی">وسایل شخصی</option>
  <option value="7">سرگرمی و فراغت</option>
  <option value="سرگرمی و فراغت">تجهیزات و صنعتی</option>
  <option value="اجتماعی">اجتماعی</option>
  <option value="استخدام">استخدام</option>
</select>
<h4 className='my-4 text-start mx-4'>عکس آگهی</h4>
<p  className='my-4 text-start mx-4'>افزودن عکس بازید آکهی شما راتا سه برابر افزایش می دهد</p>
<div className='mb-3'>
<input type="file" accept='image/*'  onChange={(e)=> handelImage(e.target.files[0])} className='form-control w-75 my-1 mx-auto'/>
<input type="file" accept='image/*'  onChange={(e)=> handelImage(e.target.files[0])} className='form-control w-75 my-1 mx-auto'/>
<input type="file" accept='image/*'  onChange={(e)=> handelImage(e.target.files[0])}  className='form-control w-75 my-1 mx-auto'/>
<input type="file" accept='image/*'  onChange={(e)=> handelImage(e.target.files[0])}  className='form-control w-75 my-1 mx-auto'/>
</div>
<h4 className='my-4 text-start mx-4'>عنوان آگهی</h4>
<div className='form-floating w-75 mx-auto'>
    <textarea className='form-control text-start' id='floatingTextarea' onChange={(e)=>setlabel(e.target.value)}></textarea>
    <label for="floatingTextarea">عنوان آگهی</label>
</div>
<h4 className='my-4 text-start mx-4'>توضیحات</h4>
<div className='form-floating w-75 mx-auto'>
    <textarea className='form-control text-start' id='floatingTextarea2' onChange={(e)=>setexplanation(e.target.value)} style={{height:"250px"}}></textarea>
    <label for="floatingTextarea2">توضیحات</label>
</div>
<h4 className='my-4 text-start mx-4'>قیمت</h4>
<div className='form-floating w-75 mx-auto'>
    <input type="text" className='form-control text-start' id='floatingTextarea' onChange={(e)=>setprice(e.target.value)}></input>
    <label for="floatingTextarea">قیمت</label>
</div>
<div className='d-flex justify-content-center my-5'> 
            <button  className='btn mx-3 btn-danger' type='submit' onClick={(e)=>handelform(e)}>
                ثبت آگهی
            </button>
            <Link className='btn mx-3 btn-danger' to="/">
            انصراف
            </Link>
           
        </div>
        </form>
      
    </Fragment>  );
}
 
export default Notice;