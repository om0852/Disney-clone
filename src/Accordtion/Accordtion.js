import React, { useState } from 'react'
import Question from './api'
import Myaccrodtion from './Myaccrodtion'

function Accordtion() {
    const [data,setdata] = useState(Question);
    // console.log(data);
  return (
    <>
      <div className='text-center m-auto bg-gradient top-50'>
        <h2 className='text-center '>Interview Question</h2>
        {data.map((value,index)=>{
            return <Myaccrodtion key={index} value={value}/>
        })}
      </div>
    </>
  )
}

export default Accordtion
