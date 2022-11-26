import React from 'react'
import Triller from './section/Triller'
import Sport from './section/Sport'
import Popular from './section/Popular'
import One_piece from './section/One_piece'

function Section() {
  return (
    <div className='mt-5'>
      <Triller/>  
      <Sport/>
      <Popular/>
      <One_piece/>
    </div>
  )
}

export default Section
