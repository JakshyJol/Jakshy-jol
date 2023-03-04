import React, { useState } from "react";
import Modal from "../../../../Modal/Modal";
import modalWindowTwo from '../../../../Assets/png/aftor.png'
import "./ImageCar.css";
function ImageCar() {
	const [modalActive, setModalActive] = useState(false);
	return (
		<>
			<div className="imageCar" onClick={() => setModalActive(true)}>
				<p>Записаться на практику</p>
			</div>
			<Modal active={modalActive} setActive={setModalActive}>
				<div className="modal_window">
					<img src={modalWindowTwo} alt="" />

					<div className="modal_right">
						<h1>Практика</h1>
						<p>
							Цена: 1000 сомов /1.5часа (входит ПДД, ОБДД,
							ИНСТРУКТАЖ, ВОЖДЕНИЕ АВТОМОБИЛЯ) wa.me/996705265747
						</p>
					</div>
				</div>
			</Modal>
		</>
	);
}
export default ImageCar;
