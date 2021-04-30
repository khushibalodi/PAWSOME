import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import Navigation from "./components/Navigation.js";
import Home from './components/Home.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FindMyPet from "./components/FindMyPet";
import Adoption from "./components/Adoption";
import Explore from "./components/Explore";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/findmypet" component={FindMyPet} />
          <Route exact path="/adoption" component={Adoption} />
          <Route exact path="/explore" component={Explore} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
