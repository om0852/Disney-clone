import React from 'react'
import {BrowserRouter as Router,Route,Routes,Navigate} from 'react-router-dom'
import Navbar from './Navbar'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Service from './Service'

function Main() {
  return (
    <>
    <Router>
    <div>
<Navbar/>
        <Routes>
<Route exact path='/' element={<Home/>}/>
<Route exact path='/contact' element={<Contact/>}/>
<Route exact path='/about' element={<About/>}/>
<Route exact path='/service' element={<Service/>}/>
<Route exact path='*' element={<Navigate to="/"/> }/>
        </Routes>
    </div>
    </Router>
    </>
  )
}

export default Main
