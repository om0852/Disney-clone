import React, { useState } from 'react'

function Myaccrodtion(props) {
    // [value] = props;
    const [set, setset] = useState(false)
    console.log(props.value);
    const clicked = () =>{
        if(set===true){
            setset(false);
        }
        else{
            setset(true);
        }
    }
  return (
    <>
    <div className='text-center '>
        <h2 onClick={clicked}>{props.value.question}</h2>
      { set && <h2>{props.value.answer}</h2>}

    </div>
    </>
  )
}

export default Myaccrodtion
