import React from 'react'
import './Section_2.css'
import document from './../../assets/document.png'
import btnWhatspp from './../../assets/Btn_whatspp.png'
import bio from './../../assets/bio.png'
import practice from './../../assets/practice.png'
import Instruction from './../../assets/Instruction.png'


export const Section_2 = () => {

  const cards = [
    {
      id: 1,
      title: 'Биография автора',
      background: bio
    },
    {
      id: 2,
      title: 'Записаться на практику',
      background: practice
    },
    {
      id: 3,
      title: 'Методическое  пособие',
      background: Instruction
    },
  ]
  return (
    <div className='section_two'>
      <div className='dd'>

        <div><img src={document} alt="" /></div>
        <div className='section_two_text_and_btn'><h2>Приобрети методичку <br />сейчас и получи <br />теоретический онлайн-курс<br /> в подарок</h2>
          <img src={btnWhatspp} alt="" />
        </div>
      </div>

      <div className='card'>
        {
          cards.map((item) => (
            <>
              <div key={item.id} className='card_bio' style={{ background: `url(${item.background})` }}>
                <p>{item.title}</p>
              </div>
            </>
          ))
        }

      </div>

    </div>
  )
}
