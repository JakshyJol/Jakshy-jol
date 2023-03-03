import { Route, Routes } from "react-router-dom";
import { Layout } from "./componets/layout/Layout";
import { ModalWindow } from "./componets/Modal/ModalWindow";
import { Test } from "./componets/Test/Test";
import HomePage from "./pages/HomePage/HomePage";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Routes>
          <Route index element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<Test />} />
          <Route path="/ModalWindow" element={<ModalWindow />} />
      </Routes>
    </div>
  );
}

export default App;
