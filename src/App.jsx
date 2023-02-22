import "./App.css";
import Footer from "./Blocks/Footer/BlockFooter";
import Header from "./Blocks/Header/Header";
import Car from "./Blocks/Main/Block1/Car";
import Blockbtn from "./Blocks/Main/Block2/Blockbtn";
import Cards from "./Blocks/Main/Block3/Cards";
import Quiz from "./Blocks/Main/Block4/Quiz";
import WhiteBlockBook from "./Blocks/Main/Block5/WhiteBlockBook";
import BlockFooter from "./Blocks/Footer/BlockFooter";
function App() {
	return (
		<>
			<Header />
			<Car />
			<Blockbtn />
			<Cards />
			<Quiz />
			<WhiteBlockBook />
			<BlockFooter />
		</>
	);
}

export default App;
