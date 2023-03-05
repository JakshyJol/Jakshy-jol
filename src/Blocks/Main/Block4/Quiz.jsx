import React , {useState}from "react";
import buttonImage from '../../../Assets/png/Mask.png';
import Modal from "../../../Modal/Modal";
import Test from "../../../Components/Test/Test";
import "./Quiz.css";
function Quiz() {
	const [modalActive, setModalActive] = useState(false);
	return (
		<div className="quizBlock" id="quiz">
			<div className="quizButtonCard">
				<p className="quiz1Text">Проверь свои знания</p>
				<p className="quiz2Text">
					Подготовься к сдаче экзаменов онлайн с помощью тренировок
				</p>
				<div className="quizButton">
					<img src={buttonImage} alt="" />
					<button onClick={() => setModalActive(true)}>Пройти тест</button>
				</div>
			</div>
			<div className="quizImage"></div>
			<Modal active={modalActive} setActive={setModalActive}>
				<Test />
			</Modal>
		</div>
	);
}
export default Quiz;
