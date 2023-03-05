import React, { useState } from "react";
import Modal from "../../../../Modal/Modal";
import modalWindowTwo from "../../../../Assets/png/modal_window_2.png";
import "./ImageCar.css";
function ImageCar() {
	const [modalActive, setModalActive] = useState(false);
	return (
		<>
			<div className="imageCar" onClick={() => setModalActive(true)}>
				<p>Записаться на практику</p>
			</div>
			<Modal active={modalActive} setActive={setModalActive}>
				<div className="modal_windowCar">
					<img src={modalWindowTwo} alt="" />

					<div className="modal_rightCar">
						<h1>Практика</h1>
						<p>
							Цена: 1000 сомов /1.5часа (входит ПДД, ОБДД,
							ИНСТРУКТАЖ, ВОЖДЕНИЕ АВТОМОБИЛЯ)
						</p>
						<a
							href="https://api.whatsapp.com/send/?phone=996705265747"
							target="_blank"
						>
							wa.me/996705265747
						</a>
					</div>
				</div>
			</Modal>
		</>
	);
}
export default ImageCar;
