import React from 'react'
import { Link } from 'react-router-dom'
import instgram from '../../assets/Logo_instogram.png'
import whatsapp from '../../assets/whats.png'
import kg from '../../assets/kg.png'
import logo from '../../assets/logo.png'
import '../Header/Header.css'
export const Header = () => {
  return (
    <div className='header'>
      <div>
    <img src={logo} alt="" />
      </div>
        <div className='contant_header'>
            <Link>Главная</Link>
            <Link>Онлайн тест</Link>
            <Link>Об авторе</Link>
            <Link>Методичка</Link>
        </div>
        <div className='right_header'>
        <a href="tel:0705265747">0705 265 747</a>
        <img src={whatsapp} />
        <img src={instgram} />
        <img src={kg} />
       
        </div>
    </div>
  )
}
