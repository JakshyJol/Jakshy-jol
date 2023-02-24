import React from 'react'
import banner from '../../assets/banner.png'
import car from '../../assets/car.png'
import { ModalWindow } from '../../componets/Modal/ModalWindow'
import { Section } from '../../componets/Section/Section'
import { Section_ } from '../../componets/Section_/Section_'
import { Section_2 } from '../../componets/Section_2/Section_2'
import { SectionThird } from '../../componets/Section_3/Section_3'
import { SectionFourth } from '../../componets/Section_4/Section_4'
import '../HomePage/HomePage.css'

const HomePage = () => {
  return (
    <div className='HomePage'>
 
     <Section />
     <Section_2/>

     <Section_/>
     <SectionThird/>
     <SectionFourth className="style"/>
    </div>
  )
}

export default HomePage