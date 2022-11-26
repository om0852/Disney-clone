import React, { useState } from 'react'
import './Disney.css'
function Slider() {
  let prenum=0;
  const [Mystyle,setmystyle] = useState({
    transform:`translate(-0px)`,
  })
  const [tx_num,settx_num] = useState(0);
  setInterval(() => {
    prenum= prenum+400
    settx_num(prenum)
    setmystyle({
      transform:`translate(-${tx_num}px)`
    })
    if(prenum>2700){
      prenum=0;
    }
  }, 7000);
  return (
    <>
      <div className='main-slider'>
      <div className='slider-container'>
        <div className='slider-flex' style={Mystyle}>

        <div className='img-slider'>
          <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/504/1420504-h-d9dbf0451c52"/>
        </div>
        <div className='img-slider bg-green'>
          <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2778/1312778-h-53e5e3391807'/>
        </div>
        <div className='img-slider bg-white'>
          <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3064/1323064-h-dcaae091e676'/>
        </div>
        <div className='img-slider bg-white'>
          <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/957/1310957-h-3552a38a0497'/>
        </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Slider
