import React, { useState } from 'react'
import './Section_3.css'
import quiz from './../../assets/quiz.png'
import BtnTest from './../../assets/Btn-test.png'
import { Test } from '../Test/Test'

export const SectionThird = () => {

  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='SectionThird'>
      {openModal && <Test/>}
        <div className='SectionThird_left'>
            <h2>Проверь свои знания</h2>
            <p>Подготовься к сдаче экзаменов <br/>онлайн с помощью тренировок</p>
            <img onClick={()=>setOpenModal(true)} src={BtnTest} alt="" />
        </div>
        <div className='SectionThird_rigth'>
        <img  src={quiz} alt="" />
        </div>
    </div>
  )
}
