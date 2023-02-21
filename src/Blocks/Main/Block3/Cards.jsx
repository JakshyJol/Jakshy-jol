import React from "react";

import "./Cards.css";
function Cards() {
	return (
		<div className="mainCards">
			<div className="imageRus">
				<p>Биография автора</p>
			</div>
			<div className="imageCar">
				<p>Записаться на практику</p>
			</div>
			<div className="imageBook">
				<p>Методическое пособие</p>
			</div>
		</div>
	);
}
export default Cards;
