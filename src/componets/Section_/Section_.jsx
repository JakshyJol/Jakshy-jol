import React, { useState } from 'react'
import { ModalWindow } from '../Modal/ModalWindow'
import { ModalWindow_2 } from '../Modal_second/ModalWindow_2'
import { ModalWindow_3 } from '../Modal_Three/ModalWindow_3'

import './Section_.css'


export const Section_ = () => {
   
const [isOpen, setIsOpen] = useState(false)
const [isOpenSecond, setIsOpenSecond] = useState(false)
const [isOpenThree, setIsOpenThree] = useState(false)

const handelClick = () =>{
  setIsOpen(false)
  setIsOpenSecond(false)
  setIsOpenThree(false)
}

  return (
    <div className='section_two'>
      { isOpen && <ModalWindow handelCloseClick={handelClick}/>}
      { isOpenSecond && <ModalWindow_2 handelCloseClick={handelClick}/>}
      { isOpenThree && <ModalWindow_3 handelCloseClick={handelClick}/>}
      
    <div className='card'> 
          <div  className='first_modal'>
            <div  onClick={()=>setIsOpen(true)} className='card_bio' >
              <p>Биография автора</p>
            </div>
          </div>
          
          <div  className='second_modal'>
            <div onClick={()=>setIsOpenSecond(true)} className='card_bio' >
              <p>Записаться на практику</p>
            </div>
          </div>
          <div  className='three_modal'>
            <div onClick={()=>setIsOpenThree(true)} className='card_bio' >
              <p>Биография автора</p>
            </div>
          </div>
    </div>
   
    </div>
  )
}
