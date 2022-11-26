import React from 'react'
import { FirstName } from './Contextapi';

function C() {
  return (
    <>
    <FirstName.Consumer>{(name)=>{    
   return  <h2>hi {name.name}{name.lname}</h2>   
}}</FirstName.Consumer>
</>
  )
}

export default C
