import React, { useState } from "react";
import {NavLink} from 'react-router-dom'
import './Disney.css'
import disneylogo from '../Disney clone/image/Disney+_Hotstar_logo.png'
import sidebarlogo from '../Disney clone/image/sidebar-icon.png'
import SearchIcon from '@mui/icons-material/Search';
function Navbar(props) {
  let inputvalue = document.getElementById("input");
  const [data,setdatas] = useState("");
const [Mystyle,setmystyle] = useState({
  height:"00vh"
})
const [Mystyle1,setmystyle1] = useState({
  height:"00vh"
})
const [Mystyle2,setmystyle2] = useState({
  height:"00vh"
})
const [Mysidebar,setMysidebar]= useState({
  display:"none"
})
  const fsublink_container = ()=>{
    setmystyle({
      height:"60vh"
    });
}
const frsublink_container = ()=>{
  setmystyle({
    height:"00vh"
  });
}
  const fsublink_container1 = ()=>{
    setmystyle1({
      height:"60vh"
    });    
}
const frsublink_container1 = ()=>{
  setmystyle1({
    height:"00vh"
  });
}
  const fsublink_container2 = ()=>{
    setmystyle2({
      height:"60vh"
    });
}
const frsublink_container2 = ()=>{
  setmystyle2({
    height:"00vh"
  });
  
}
const sidebar_clicked = () =>{
  if(Mysidebar.display==="none"){
    setMysidebar({
      display:"table"
    })
    
  }
  else{
    setMysidebar({
      display:"none"
    })
    
  }
}
const setdata = (event) =>{
  setdatas(event.target.value)
  console.log(event.target.value)
}
const search_result = ()=>{
console.log(data);
props.getinputvalue(data);
}
  return (
    <>
        <div className="main-header">
          <nav className="header">
            <nav className="left-header">
              <div className="sidebar-icon" onClick={sidebar_clicked}>
              <img id="sidebarlogo" alt="" src={sidebarlogo}/>
              </div>
              <div className="sidebar-icon-container" style={Mysidebar}>
                <ul>
                  <li>Channel</li>
                  <li>languages</li>
                  <li>Genres</li>
                </ul>
              </div>
              <div className="logo"><img id="disneylogo" alt="" src={disneylogo}/></div>
              <div className="header-links">
                <ul>
                  <li
                  // style={Mystyle}
                    onMouseOver={fsublink_container}
                    onMouseOut={frsublink_container}
                  >
                    <a href="/">tv</a>
                  </li>
                  <div
                  style={Mystyle}
                    onMouseOver={fsublink_container}
                    onMouseOut={frsublink_container}
                    className="sublink-container0 slide-up"
                  >
                    
                    <a
                      href="/in/channels/other-shows"
                      to="/in/channels/other-shows"
                      className="dropdown-link"
                      target=""
                    >
                      
                      Other Shows
                    </a>
                    <a
                      href="/in/channels/hotstar-specials"
                      to="/in/channels/hotstar-specials"
                      className="dropdown-link"
                      target=""
                    >
                      
                      Hotstar Specials
                    </a>
                    <a
                      href="/in/channels/quix"
                      to="/in/channels/quix"
                      className="dropdown-link"
                      target=""
                    >
                      
                      Quix
                    </a>
                    <a
                      href="/in/channels/star-jalsha"
                      to="/in/channels/star-jalsha"
                      className="dropdown-link"
                      target=""
                    >
                      
                      Star Jalsha
                    </a>
                    <a
                      href="/in/channels/starplus"
                      to="/in/channels/starplus"
                      className="dropdown-link"
                      target=""
                    >
                      StarPlus
                    </a>
                    <a
                      href="/in/channels/star-vijay"
                      to="/in/channels/star-vijay"
                      className="dropdown-link"
                      target=""
                    >
                      
                      Star Vijay
                    </a>
                    <a
                      href="/in/channels/star-bharat"
                      to="/in/channels/star-bharat"
                      className="dropdown-link"
                      target=""
                    >
                      
                      Star Bharat
                    </a>
                    <a
                      href="/in/channels/asianet"
                      to="/in/channels/asianet"
                      className="dropdown-link"
                      target=""
                    >
                      
                      Asianet
                    </a>
                    <a
                      href="/in/channels"
                      to="/channels"
                      className="dropdown-link"
                      target=""
                    >
                      
                      more...
                    </a>
                  </div>
                  <li>
                    <a
                      href="/"
                      // style={Mystyle1}
                      onMouseOver={fsublink_container1}
                      onMouseOut={frsublink_container1}
                    >
                      movies
                    </a>
                  </li>
                  <div
                  style={Mystyle1}
                    onMouseOver={fsublink_container1}
                    onMouseOut={frsublink_container1}
                    className="sublink-container1 slide-up"
                  >
                    
                    <a
                      href="/in/movies/languages/odia"
                      to="/in/movies/languages/odia"
                      className="dropdown-link"
                      target=""
                    >
                      
                      Odia
                    </a>
                    <a
                      href="/in/movies/languages/hindi"
                      to="/in/movies/languages/hindi"
                      className="dropdown-link"
                      target=""
                    >
                      
                      Hindi
                    </a>
                    <a
                      href="/in/movies/languages/bengali"
                      to="/in/movies/languages/bengali"
                      className="dropdown-link"
                      target=""
                    >
                      
                      Bengali
                    </a>
                    <a
                      href="/in/movies/languages/telugu"
                      to="/in/movies/languages/telugu"
                      className="dropdown-link"
                      target=""
                    >
                      
                      Telugu
                    </a>
                    <a
                      href="/in/movies/languages/malayalam"
                      to="/in/movies/languages/malayalam"
                      className="dropdown-link"
                      target=""
                    >
                      Malayalam
                    </a>
                    <a
                      href="/in/movies/languages/tamil"
                      to="/in/movies/languages/tamil"
                      className="dropdown-link"
                      target=""
                    >
                      
                      Tamil
                    </a>
                    <a
                      href="/in/movies/languages/marathi"
                      to="/in/movies/languages/marathi"
                      className="dropdown-link"
                      target=""
                    >
                      
                      Marathi
                    </a>
                    <a
                      href="/in/movies/languages/english"
                      to="/in/movies/languages/english"
                      className="dropdown-link"
                      target=""
                    >
                      
                      English
                    </a>
                    <a
                      href="/in/movies/languages/kannada"
                      to="/in/movies/languages/kannada"
                      className="dropdown-link"
                      target=""
                    >
                      
                      Kannada
                    </a>
                    <a
                      href="/in/movies/languages/korean"
                      to="/in/movies/languages/korean"
                      className="dropdown-link"
                      target=""
                    >
                      
                      Korean
                    </a>
                    <a
                      href="/in/movies/languages/japanese"
                      to="/in/movies/languages/japanese"
                      className="dropdown-link"
                      target=""
                    >
                      Japanese
                    </a>
                  </div>
                  <li
                    onMouseOver={fsublink_container2}
                    onMouseOut={frsublink_container2}
                  >
                    <a href="/">sport</a>
                  </li>
                  <li>
                    <a href="/">disney+</a>
                  </li>
                  <div
                  style={Mystyle2}
                    onMouseOver={fsublink_container2}
                    onMouseOut={frsublink_container2}
                    className="sublink-container slide-up"
                  >
                    
                    <a
                      href="/in/sports/cricket"
                      to="/in/sports/cricket"
                      className="dropdown-link"
                      target=""
                    >
                      
                      Cricket
                    </a>
                    <a
                      href="/in/sports/football"
                      to="/in/sports/football"
                      className="dropdown-link"
                      target=""
                    >
                      Football
                    </a>
                    <a
                      href="/in/sports/formula-1"
                      to="/in/sports/formula-1"
                      className="dropdown-link"
                      target=""
                    >
                      
                      Formula 1
                    </a>
                    <a
                      href="/in/sports/kabaddi"
                      to="/in/sports/kabaddi"
                      className="dropdown-link"
                      target=""
                    >
                      
                      Kabaddi
                    </a>
                    <a
                      href="/in/sports/hockey"
                      to="/in/sports/hockey"
                      className="dropdown-link"
                      target=""
                    >
                      
                      Hockey
                    </a>
                    <a
                      href="/in/sports/formula-e"
                      to="/in/sports/formula-e"
                      className="dropdown-link"
                      target=""
                    >
                      
                      Formula E
                    </a>
                    <a
                      href="/in/sports/martial-arts"
                      to="/in/sports/martial-arts"
                      className="dropdown-link"
                      target=""
                    >
                      
                      Martial Arts
                    </a>
                    <a
                      href="/in/sports/tennis"
                      to="/in/sports/tennis"
                      className="dropdown-link"
                      target=""
                    >
                      
                      Tennis
                    </a>
                    <a
                      href="/in/sports/khelo-india"
                      to="/in/sports/khelo-india"
                      className="dropdown-link"
                      target=""
                    >
                      
                      Khelo India
                    </a>
                    <a
                      href="/in/sports/american-football"
                      to="/in/sports/american-football"
                      className="dropdown-link"
                      target=""
                    >
                      Football
                    </a>
                    <a
                      href="/in/sports/athletics"
                      to="/in/sports/athletics"
                      className="dropdown-link"
                      target=""
                    >
                      Athletics
                    </a>
                    <a
                      href="/in/sports/golf"
                      to="/in/sports/golf"
                      className="dropdown-link"
                      target=""
                    >
                      
                      Golf
                    </a>
                  </div>
                </ul>
              </div>
            </nav>
            <nav className="right-header">
              <span>
              <input className="search" id="input" type="text" placeholder="search" onChange={setdata} />
              <NavLink to="/search">
              <span className="search_icon" onClick={search_result}>
              <SearchIcon />
              </span>
              </NavLink>
              </span>
              <button className="subcription" type="submit">
                subcription
              </button>
              <button className="login">login</button>
            </nav>
          </nav>
        </div>
        <div />
      </>
  );
}

export default Navbar;
