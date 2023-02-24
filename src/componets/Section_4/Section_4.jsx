import React from 'react'
import './Section_4.css'
import ParcingCar from './../../assets/Parcing_car.png'
import manual from './../../assets/manual.png'

export const SectionFourth = () => {
  return (
    <div className='SectionFourth'>
      <div className='setca'>
        <div className='section_fourth_left'>
        <h1>Методичка</h1>
        <h2>Методическое пособие для тех кто хочет <br/>подготовиться к сдаче тестов по ГРС</h2>
        <img src={ParcingCar} alt="" />
        <h2>Купите методичку и подготовьтесь к тестам <br/> с преподавателем с многолетним стажем</h2>
        </div>

        <div className='section_fourth_right'>
        <img src={manual} alt="" />
        </div>
      </div>
        </div>
  )
}
