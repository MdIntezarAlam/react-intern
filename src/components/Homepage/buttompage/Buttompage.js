import React from 'react'
import '../buttompage/buttom.css';
import bt from '../../../assets/3D/bt.PNG'

const Buttompage = () => {
  return (
    <div className='buttom_page'>
      <div className="heding">
        <h1 className='buttom_heading'> OUR <span className='heading_sec'>FRIENDS</span></h1>
        <div className="buttom_img">
        <img src={bt}/>
        </div>
      </div>
    </div>
  )
}

export default Buttompage 