import Home from "./pages/home/home";
import "./index.css";

import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Parse from "parse/dist/parse.min.js";

const app_id = process.env.REACT_APP_PARSE_APP_ID;
const host_url = process.env.REACT_APP_PARSE_HOST_URL;
const javascript_key = process.env.REACT_APP_PARSE_JAVASCRIPT_KEY;
Parse.initialize(app_id, javascript_key);
Parse.serverUrl(host_url);

function App() {

  const fetchAllPlayers = async () => {
    const query = new Parse.query("Product");
    const allProducts = await query.Find();
    allProducts.forEach(product => {
      console.log(product)
    })
  }
  fetchAllPlayers();
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
