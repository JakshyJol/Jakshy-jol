import React from 'react'
import banner from '../../assets/banner.png'
import car from '../../assets/car.png'
import { Section } from '../../componets/Section/Section'
import { Section_2 } from '../../componets/Section_2/Section_2'
import '../HomePage/HomePage.css'

const HomePage = () => {
  return (
    <div className='HomePage'>
     <Section/>
     <Section_2/>
    </div>
  )
}

export default HomePage