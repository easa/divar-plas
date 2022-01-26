import {React,useState} from 'react';
import { Route, Routes } from 'react-router';
import Classification from './Components/Classification';
import Header from './Components/Header';
import Menu from './Components/Menu';
import simpleContext from './context';
import Landed from './Components/classification/Landed';
import Cares from './Components/classification/Cares';
import Digital from './Components/classification/Digital';
import Kitchen from './Components/classification/Kitchen';
import Service from './Components/classification/Service';
import Equipment from './Components/classification/Equipment';
import Rest from './Components/classification/Rest';
import Personal from './Components/classification/Personal';
import Social from './Components/classification/Social';
import Recruitment from './Components/classification/Recruitment';
import MyDivar from './Components/Mydivar';
import Chat from './Components/Chat';
import ChangeName from './Components/ChangeName';
import Notice from './Components/Notice';
import NoticeShow from './Components/NoticeShow';
import SingleNotice from './Components/SingleNotice';
const App = () => {
  const [getName,setName]=useState("Armin");
  const [getNotices,setNotices]=useState([]);
  const [getSingleNotice,setSingleNotice]=useState({});
  return (
    <simpleContext.Provider value={{getName:getName,setName:setName,
    getNotices:getNotices,setNotices:setNotices,
    getSingleNotice:getSingleNotice,setSingleNotice:setSingleNotice}}>
    <div className='c'>
      <Chat/>
      <Routes>
        <Route path="/" element={
        <div>
          <Header/>
          <NoticeShow/>
        </div>
      
      }></Route>
        <Route path="/ChangeName" element={<ChangeName/>}></Route>
        <Route path="/Mydivar" element={<MyDivar/>}></Route>
        <Route path="/Landed" element={<Landed/>}></Route>  
        <Route path="/SingleNotice" element={<SingleNotice/>}></Route>
        <Route path="/Digital" element={<Digital/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
        <Route path="/Socail" element={<Social/>}></Route>
        <Route path='/Personal' element={<Personal/>}></Route>
        <Route path="/Notice" element={<Notice/>}></Route>
        <Route path="/Recruitment" element={<Recruitment/>}></Route>
        <Route path="/Rest" element={<Rest/>}></Route>
        <Route path="/kitchen" element={<Kitchen/>}></Route>
        <Route path="/Cares" element={<Cares/>}></Route> 
        <Route path="/Equipment" element={<Equipment/>}></Route>
        <Route path="/classific" element={ <Classification/>}></Route>
      </Routes> 
      <Menu/>
    </div>
      
    </simpleContext.Provider> );
}
 
export default App;