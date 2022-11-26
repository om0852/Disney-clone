import React from 'react';
import Card from './Card';
import onepiece from './onpiece.jpg'
const Cards = () => {
   const mycard={
        display:"flex",
        justifyContent:"space-between"
    }
  return (
    <div>
        <div className='flex' style={mycard}>
       <Card imgurl={onepiece} title={"onepiece"}/>
       <Card imgurl={onepiece} title={"onepiece"}/>
       <Card imgurl={onepiece} title={"onepiece"}/>
        </div>
    </div>
  )
}

export default Cards
