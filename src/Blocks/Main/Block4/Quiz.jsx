import React from "react";
import buttonImage from '../../../Assets/png/Mask.png';
import "./Quiz.css";
function Quiz() {
	return (
		<div className="quizBlock">
			<div className="quizButtonCard">
				<p className="quiz1Text">Проверь свои знания</p>
				<p className="quiz2Text">
					Подготовься к сдаче экзаменов онлайн с помощью тренировок
				</p>
				<div className="quizButton">
					<img src={buttonImage} alt="" />
					<button>Пройти тест</button>
				</div>
			</div>
			<div className="quizImage"></div>
		</div>
	);
}
export default Quiz;
