import React, { useState } from "react";

import ImageRus from './Rus/ImageRus';
import ImageCar from "./Car/ImageCar";
import ImageBook from "./Book/ImageBook";
import "./Cards.css";


function Cards() {
	return (
		<div className="mainCards" id="Cards">
			<ImageRus />
			<ImageCar />
			<ImageBook />
		</div>
	);
}
export default Cards;
