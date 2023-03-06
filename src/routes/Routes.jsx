import {
  HashRouter as Router,
  Route,
  } from 'react-router-dom';

import Home from "../pages/home/home";

export const Routes = ()=>{
  return(
    <Router>
    <div>
      <Route exact path="/" component={Home} />
    </div>
  </Router>

  )
}

