import React, { useState } from "react";
import Modal from "../../../Modal/Modal";

import "./Cards.css";
function Cards() {
	const [modalActive , setModalActive] = useState(false)
	return (
		<div className="mainCards" id="Cards">
			<div className="imageRus" onClick={() => setModalActive(true)}>
				<p>Биография автора</p>
			</div>
			<div className="imageCar">
				<p>Записаться на практику</p>
			</div>
			<div className="imageBook">
				<p>Методическое пособие</p>
			</div>
			<Modal active={modalActive} setActive={setModalActive}>
				<p>almaz</p>
			</Modal>
		</div>
	);
}
export default Cards;
