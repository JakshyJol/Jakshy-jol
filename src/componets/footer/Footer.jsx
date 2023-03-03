import React from 'react'
import './Footer.css'
import Logo from './../../assets/logo.png'
import LogoInstogram from './../../assets/Logo_instogram.png'
import whats from './../../assets/whats.png'


export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_left_logo'>
        <img src={Logo} alt="" />
      </div>

      <div className='footer_left'>
          <h2>Омурбеков Руслан Жакшылыкович</h2>
          <h2>Инструктор по вождению и преподаватель <br/>теории  в автошколе</h2>
          <p>Codifylab<br/>
             7 мкр, 23 стр, дом Атлант <br/>
             ул. Исанова 105/3</p>
      </div>

      <div className='footer_right'>
          <a href="tel:0705555265747">0705 (555) 265 747</a>
          <img src={whats} alt=""  className='logo_footer'/>
          <img src={LogoInstogram} alt="" className='logo_footer'/>
          <div>
          <a href="tel:0500550431430">0500 (550) 431 430</a>
          <p>ruslanjacshyiykov65@gmail.com</p>
          </div>
      </div>
    </div>
  )
}
