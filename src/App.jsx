import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Help from "./components/Help";
import Step1 from "./components/Step1";
import Result from "./components/Result";
import Step2 from "./components/Step2";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Step1} />
        <Route path="/step2" component={Step2} />
        <Route path="/result" component={Result} />
        <Route path="/help" component={Help} />
      </Router>
    </div>
  );
}

export default App;
