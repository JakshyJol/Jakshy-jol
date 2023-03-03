
import './ModalWindow_2.css'

import modalWindowTwo from './../../assets/modal_window_2.png'





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




