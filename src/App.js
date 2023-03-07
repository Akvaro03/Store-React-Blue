import Home from "./pages/home/home";
import "./index.css";

import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
    <Navbar />
    <BrowserRouter>
      <Route path="/" component={Home} />
      <Route path="/contact" component={Navbar} />
    </BrowserRouter>
    </div>
  );
}

export default App;
