import React, { useState } from 'react'


function Notedesc(props) {
  const [notede,setde] = useState(" ")
  let textvalue = document.getElementById('text-area');
  const clicked= (event)=>{
    
    console.log(textvalue.value)
    console.log()
    props.textarea(notede);
    // props.textarea(notede);
    setde(event.target.value);
    setde(event.target.value);
    console.log(notede)
  }
  return (
    <div>
        <div className="input-group">
  <textarea className="form-control" id='text-area' aria-label="With textarea" onChange={clicked}></textarea>
</div>
<button className='btn btn-success container'  onClick={()=>{
  props.textarea(notede);
  props.add(notede);

}}>Add</button>
    </div>
  )
}

export default Notedesc