import React, { useState } from 'react'
import './Section_2.css'
import document from './../../assets/document.png'
import btnWhatspp from './../../assets/Btn_whatspp.png'



export const Section_2 = () => {
  
  return (
    <div className='section_two'>
      <div className='dd'>

        <div><img src={document} alt="" /></div>
        <div className='section_two_text_and_btn'><h2>Приобрети методичку <br />сейчас и получи <br />теоретический онлайн-курс<br /> в подарок</h2>

          <img   src={btnWhatspp} alt="" />
        </div>
      </div>
     

    </div>
  )
}
