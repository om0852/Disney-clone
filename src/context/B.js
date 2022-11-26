import React,{useContext} from 'react'
import C from './C'
import { FirstName } from './Contextapi';
function B() {
  let name  = useContext(FirstName)
  return <h2>{name.name}</h2>
    
}

export default B
