import React,{useState} from 'react'
import AddIcon from '@mui/icons-material/Add';

function TodoList() {
  const [num,setnum] =  useState(0)
  const clicked = (pre)=>{
    if(pre.target.value ==="Decrement"){
      setnum(num-1);
    }
    else{
      setnum(num+1);
    }
    // console.log(pre.target.value)
  }
  return (
    <div>
      <div>{num}</div>
      <button value="Increment" onClick={clicked}><AddIcon/></button>
      <button value="Decrement" disabled={num===0} onClick={clicked}>Decrement</button>
    </div>
  )
}

export default TodoList
