import React, { useState } from 'react'
import './ModalWindow.css'
import modalWindowOne from './../../assets/aftor.png'





export const ModalWindow = (props) => {


    return (
        <div className='modal_window_main'>
            <p onClick={props.handelCloseClick} className='btn_close'>&times;</p>
            <div>
                <div className='modal_window'>
                        <img src={modalWindowOne} alt="" />
                        
                        <div className='modal_right'>
                        <h1>Автор методички</h1>
                        <p>Омурбеков Руслан Жакшылыкович.
                            Водительский стаж более 25 лет.
                            Опыт преподавания и инструкторский стаж более 12 лет.
                            Индивидуально подготовил практическому вождению 1500+
                            за 6 лет преподавания в автошколе выпустил более 1600+ студентов
                            Во время преподавания ПДД в автошколе, обнаружил ошибки и не полную информацию в ПДД Кыргызстана от 5.02.2020 года. Отталкиваясь от этих ошибок, составил свою методичку по ПДД.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}