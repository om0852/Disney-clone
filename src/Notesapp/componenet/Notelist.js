import React from 'react'
import '../Noteapp.css'


function Notelist(props) {
  return (
    <div>
      <div className="card" onClick={()=>{
        console.log("clicked")
        props.clearitem(props.id)
      }} >
  <div className="card-body">
    <h5 className="card-title">{props.value}</h5>
    <p className="card-text">{props.description}</p>
  
  </div>
</div>
    </div>
  )
}

export default Notelist
