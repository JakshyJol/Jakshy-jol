import { Route, Routes } from "react-router-dom";
import { Layout } from "./componets/layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
