import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/Logo.svg'
import { ReactComponent as LogoWtsapp } from '../../assets/Logo_watsapp.svg'
import { ReactComponent as LogoInstogram } from '../../assets/Logo_instogram.svg'
import { ReactComponent as LogoKirigistan } from '../../assets/Logo_kirgistan.svg'
import '../Header/Header.css'
export const Header = () => {
  return (
    <div className='header'>
        <Logo/>
        <div className='contant_header'>
            <Link>Главная</Link>
            <Link>Онлайн тест</Link>
            <Link>Об авторе</Link>
            <Link>Методичка</Link>
        </div>
        <div className='right_header'>
        <a href="tel:0705265747">0705 265 747</a>
        <LogoWtsapp className='media_icons'/>
        <LogoInstogram className='media_icons' />
        <LogoKirigistan className='media_icons' />
        </div>
    </div>
  )
}
