import React, { useState } from "react";
// import Modal from "../../../Modal/Modal";
import Modal from "../../../../Modal/Modal";
import modalWindowThree from '../../../../Assets/png/manual.png'
import "./ImageBook.css";
function ImageBook() {
	const [modalActive, setModalActive] = useState(false);
	return (
		<>
			<div className="imageBook" onClick={() => setModalActive(true)}>
				<p>Методическое пособие</p>
			</div>
			<Modal active={modalActive} setActive={setModalActive}>
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
			</Modal>
		</>
	);
}
export default ImageBook;
