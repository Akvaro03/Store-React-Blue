import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import "./index.css";

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/hpñ" element={<Home />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
