import React from 'react'
import Navbar from './Navbar'
// import Contact from './Contact'
import {
    BrowserRouter as Router,
    Route, Routes,Navigate 
  } from "react-router-dom";
import Contact from './Contact';
import About from './About';
import Error404 from './Error404';
function Main() {
  return (
      <div>
      <Router>
        <Navbar/>
    <Routes>
        {/* <Route path="/home" element ={<Contact/>}/> */}
        <Route exact path="/" element={<Error404 />} />
        <Route exact path="/home" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        {/* <Route path='*' element={<About/>}/> */}
        <Route path="*" element={ <Navigate to="/" /> } />    </Routes>
      </Router>

    </div>
  )
}

export default Main
