import React, { useState } from 'react'
import Main from './Main'
import Navbar from './Navbar'
import Serach_result from './Serach_result';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function DisneyMain() {
  const [getdata,setdata] = useState("dangal");
  const getinputvalue = (data)=>{
      setdata(data);  
      console.log("getdata:"+getdata);
  }
  return (
    <>
    <Router>
      <Navbar getinputvalue={getinputvalue}/>
      <div className='main'>
        <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/Search" element={<Serach_result getdata={getdata}/>}/>
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default DisneyMain
