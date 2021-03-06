import React from 'react';
import './App.scss';

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

import Home from "./views/Home/Home";
import Howitworks from "./views/Howitworks/Howitworks";
import About from "./views/About/About";
import Jobs from "./views/Jobs/Jobs";
import FourOhFour from "./views/FourOhFour/FourOhFour";
import Bounties from "./views/Bounties/Bounties";
	
import './fonts/RenogareSoft-Regular.woff';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/howitworks" component={Howitworks} />
          <Route path="/about" component={About} />
          <Route path="/jobs" component={Jobs} />
          <Route path="/bounties" component={Bounties} />
          <Route path="*" component={FourOhFour} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
