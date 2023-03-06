import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom'


import Home from "./pages/home/home";
import "./index.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" component={Home} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
