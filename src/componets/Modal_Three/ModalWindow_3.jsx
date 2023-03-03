
import './ModalWindow_3.css'

import modalWindowThree from './../../assets/manual.png'




export const ModalWindow_3 = (props) => {


    return (
        <div className='modal_window_main'>
            <p onClick={props.handelCloseClick} className='btn_close'>&times;</p>
            <div>
                <div className='modal_window'>
                    <img src={modalWindowThree} alt="" />

                    <div className='modal_right'>
                        <h1>Методическое пособие </h1>
                        <p>Начиная с 5.02.2020 Руслан Жакшылыкович обнаружил разные ошибки и не полную информацию в ПДД Кыргызстана. Отталкиваясь от этого, составил свою методичку.

                            Купите методичку и подготовьтесь к тестам с преподавателем с многолетним стажем

                            Методичку можно приобрести
                            в Codifylab 7 мкр, 23 стр, дом Атлант
                            105/3 ул. Исанова</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
