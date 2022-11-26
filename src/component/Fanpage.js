import React, { useState } from 'react'

const Fanpage = () => {
  let input=document.getElementById("input");
  let lastinput=document.getElementById("lastinput");
  const [myname,setname] = useState("");
  const [lastname,setlastname] = useState("");
  const oneclick = ()=>{
    // event.preventDefault();
 console.log(input.value)
 setname(input.value)
 setlastname(lastinput.value)
  }
  return (
    <>
    <div>
      <div className='time' >
        <h2>hello{myname}{lastname}</h2>
<input type="text" id="input" placeholder='first name'/>
<input type="text" id="lastinput" placeholder='last name'/>
        <button onClick={oneclick}>Submit</button>
      </div>
    </div>
    </>
  )
}

export default Fanpage
