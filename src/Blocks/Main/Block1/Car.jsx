import React from "react";
import baner from "../../../Assets/png/baner.png";
import car from "../../../Assets/png/img car.png";

import "./Car.css";
const Car = () => {
	return (
		<div className="mainCar">
			<div className="banner">
				<img src={baner} alt="" />
			</div>
			<div className="bannerCar">
				<img src={car} alt="" />
			</div>
		</div>
	);
};

export default Car;
