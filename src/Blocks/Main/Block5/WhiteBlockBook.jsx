import React from "react";
import whiteCar from "../../../Assets/png/whiteBlockCar.png";
import whiteBook from "../../../Assets/png/whiteBlockBook.png";
import "./WhiteBlockBook.css";
function WhiteBlockBook() {
	return (
		<div className="WhiteBlockBook" id="WhiteBlockBook">
			<div className="blockLeftCar">
				<h3>
					<b>Методичка</b>
				</h3>
				<p>
					Методическое пособие для тех кто хочет подготовиться к сдаче
					тестов по ГРС
				</p>
				<img src={whiteCar} alt="" />
				<p>
					Купите методичку и подготовьтесь к тестам с преподавателем с
					многолетним стажем
				</p>
			</div>
			<div className="blockRightBook">
				<img src={whiteBook} alt="" />
			</div>
		</div>
	);
}

export default WhiteBlockBook;
