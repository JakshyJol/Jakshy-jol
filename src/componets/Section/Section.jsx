import React from 'react'
import banner from '../../assets/banner.png'
import car from '../../assets/Car.png'
import './../Section/Section.css'

export const Section = () => {
  return (
    <div className='section'>
         <div className='content'>
        <div className='div_banner'>
          <img src={banner} alt="" />
        </div>
        <div className='div_car'>
        <img src={car}/>
        </div>
      </div>
    </div>
  )
}
