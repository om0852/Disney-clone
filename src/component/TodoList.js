import React,{useState} from 'react'
import '../Fanpage.css'
import Todo from './Todo';
function TodoList() {
    const [inputitem, setinputitem] = useState('');
    const [item, setitem] = useState([]);
let input = document.getElementById("input")
    const itemlist =(prevalue)=>{
        // console.log(prevalue.target.value);
        setinputitem(prevalue.target.value);
        console.log(inputitem)
    }
    const deleted = (id)=>{
      console.log(id);
      setitem((olditem)=>{
        return olditem.filter((arr,index)=>{
          return index!==id;
        })
      })
      
      
    }
    const submit_btn = () =>{
      input.value=""
        setitem((prevalue)=>{
          return [...prevalue,inputitem]
        })
      }
    
  return (
    <div>
      <div className='main_con'>
        <h2>Todo list using React js</h2>
        <input type="text" placeholder='enter your list' id="input" onChange={itemlist}/><button onClick={submit_btn} className='submit_btn'>+</button>
        {item.map((value,index)=>{
            // return <li>{value}</li>
          return <Todo deleted={deleted} key={index} id={index} text={value}/>
        })}
      </div>
    </div>
  )
}

export default TodoList