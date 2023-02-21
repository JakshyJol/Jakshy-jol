import "./App.css";
import Header from "./Blocks/Header/Header";
import Car from "./Blocks/Main/Block1/Car";
import Blockbtn from "./Blocks/Main/Block2/Blockbtn";
import Cards from "./Blocks/Main/Block3/Cards";
import Quiz from "./Blocks/Main/Block4/Quiz";

function App() {
	return (
		<>
			<Header />
			<Car />
			<Blockbtn />
			<Cards />
      <Quiz/>
		</>
	);
}

export default App;
