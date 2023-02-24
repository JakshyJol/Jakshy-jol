import React, { useState } from 'react'
import './ModalWindow_2.css'
import modalWindowOne from './../../assets/aftor.png'
import modalWindowTwo from './../../assets/modal_window_2.png'
import modalWindowThree from './../../assets/manual.png'




export const ModalWindow_2 = (props) => {


    return (
        <div className='modal_window_main'>
            <p onClick={props.handelCloseClick}  className='btn_close'>&times;</p>
            <div>
                <div className='modal_window'>
                        <img src={modalWindowTwo} alt="" />
                        
                        <div className='modal_right'>
                        <h1>Практика</h1>
                        <p>Цена: 1000 сомов   /1.5часа (входит ПДД, ОБДД, ИНСТРУКТАЖ, ВОЖДЕНИЕ АВТОМОБИЛЯ) wa.me/996705265747</p>
                    </div>
                </div>
            </div>
        </div>
    )
}




// const modalInformetion = [
//     {
//         id: 1,
//         h1: "Автор методички",
//         p: "Омурбеков Руслан Жакшылыкович Водительский стаж более 25 лет. Опыт преподавания и инструкторский стаж более 12 лет. Индивидуально подготовил практическому вождению 1500+ за 6 лет преподавания в автошколе выпустил более 1600+ студентов Во время преподавания ПДД в автошколе, обнаружил ошибки и не полную информацию в ПДД Кыргызстана от 5.02.2020 года.Отталкиваясь от этих ошибок, составил свою методичку по ПДД.",
//         img: modalWindowOne
//     },
//     {
//         id: 2,
//         h1: "Практика",
//         p: "Цена: 1000 сомов   /1.5часа (входит ПДД, ОБДД, ИНСТРУКТАЖ, ВОЖДЕНИЕ АВТОМОБИЛЯ) wa.me/996705265747",
//         img: modalWindowTwo
//     },
//     {
//         id: 3,
//         h1: "Методическое пособие ",
//         p: "Начиная с 5.02.2020 Руслан Жакшылыкович обнаружил разные ошибки и не полную информацию в ПДД Кыргызстана. Отталкиваясь от этого, составил свою методичку. Купите методичку и подготовьтесь к тестам с преподавателем с многолетним стажем Методичку можно приобрести в Codifylab 7 мкр, 23 стр, дом Атлант 105/3 ул. Исанова",
//         img: modalWindowThree
//     }
   
// ]