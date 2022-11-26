import React, { useState } from 'react';
import '../App.css';

const Card = (props) => {
    const mcardstyle ={
backgroundColor:"yellow",
color:"black",
width:"30vh",
height:"45vh",
margin:"auto 10vh"
    }
    let [count,setcount] = useState(0);
    const clicked = async ()=>{
      // console.log("clicked");
     await setcount(count++);
    }
  return (
    <div>
      <div className='cards' style={mcardstyle}>
        <div className='card'>
            <div className='img'>

            <img src={props.imgurl} alt=''/>
            </div>
            <h4>{props.title}</h4>
            <button>Watch now</button>

        </div>
      </div>
      <h2>{count}</h2>
      <button onClick={clicked}>click</button>
    </div>
  )
}

export default Card
