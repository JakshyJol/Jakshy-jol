import React, { useState } from "react";
import Modal from "../../../../Modal/Modal";
import modalWindowOne from "../../../../Assets/png/aftor.png";

import "./ImageRus.css";

function ImageRus() {
	const [modalActive, setModalActive] = useState(false);
	return (
		<>
			<div className="imageRus" onClick={() => setModalActive(true)}>
				<p>Биография автора</p>
			</div>
			<Modal active={modalActive} setActive={setModalActive}>
				<div className="modal_window">
					<img src={modalWindowOne} alt="" />
					<div className="modal_right">
						<h1>Автор методички</h1>
						<p>
							Омурбеков Руслан Жакшылыкович. Водительский стаж
							более 25 лет. Опыт преподавания и инструкторский
							стаж более 12 лет. Индивидуально подготовил
							практическому вождению 1500+ за 6 лет преподавания в
							автошколе выпустил более 1600+ студентов Во время
							преподавания ПДД в автошколе, обнаружил ошибки и не
							полную информацию в ПДД Кыргызстана от 5.02.2020
							года. Отталкиваясь от этих ошибок, составил свою
							методичку по ПДД.
						</p>
					</div>
				</div>
			</Modal>
		</>
	);
}
export default ImageRus;
